import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../pages/login/authentication.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.page.html',
  styleUrls: ['./profile-form.page.scss'],
})
export class ProfileFormPage implements OnInit {
  myform!: FormGroup;
  changePasswordForm!: FormGroup;
  imageUrl: any;
  userImage: any;
  firstName: any;
  lastName: any;
  telephone: any;
  email: any;

  constructor(
    private profileService: AuthenticationService,
    private formBuilder: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.profileDetails();
    this.myform = this.formBuilder.group({
      file: [null],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      telephone: ['', [Validators.minLength(8)]],
      email: ['', Validators.required],
    });

    this.changePasswordForm = this.formBuilder.group(
      {
        oldPassword: ['', Validators.required],
        newPassword: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      {
        validator: this.passwordMatchValidator,
      }
    );
  }

  selectFile(event: any): void {
    if (!event) {
      console.error('Event is undefined.');
      return;
    }

    const fileInput = event.currentTarget as HTMLInputElement;

    if (!fileInput.files || fileInput.files.length === 0) {
      console.error('No file selected.');
      return;
    }

    const file = fileInput.files[0];
    const mimeType = file.type;
    if (!mimeType || !mimeType.match(/image\/*/)) {
      console.error('Selected file is not an image.');
      return;
    }
    this.userImage = file;
    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl = reader.result as string;
      this.changeDetectorRef.detectChanges();
    };
    reader.readAsDataURL(file);
  }

  profileDetails() {
    this.profileService.getProfileDetails().subscribe((data: any) => {
      this.imageUrl = data.imageName ? `http://localhost:3000/${data.imageName}` : 'assets/user.jpg';
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.telephone = data.telephone;
      this.email = data.email;

      this.myform.setValue({
        file: null,
        firstName: data.firstName,
        lastName: data.lastName,
        telephone: data.telephone,
        email: data.email,
      });
    });
  }

  updateProfile() {
    const formData = new FormData();
    formData.append('file', this.userImage);
    formData.append('firstName', this.myform.get('firstName')!.value);
    formData.append('lastName', this.myform.get('lastName')!.value);
    formData.append('telephone', this.myform.get('telephone')!.value);

    this.profileService.updateProfile(formData).pipe(
      catchError(err => {
        console.error(err.error.msg);
        return throwError(err);
      })
    ).subscribe(result => {
      console.log('Profile updated successfully');
      window.location.reload();
    });
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('newPassword')!.value === form.get('confirmPassword')!.value
      ? null
      : { passwordsDoNotMatch: true };
  }

  updatePassword() {
    if (this.changePasswordForm.invalid) {
      return;
    }

    const formData = new FormData();
    formData.append('oldPassword', this.changePasswordForm.get('oldPassword')!.value);
    formData.append('newPassword', this.changePasswordForm.get('newPassword')!.value);
    formData.append('confirmPassword', this.changePasswordForm.get('confirmPassword')!.value);

    this.profileService.changePassword(formData).pipe(
      catchError(err => {
        console.error('Password change error', err);
        return throwError(err);
      })
    ).subscribe(result => {
      console.log('Password changed successfully');
      window.location.reload();
    });
  }
}
