import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthenticationService } from '../pages/login/authentication.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorgeService } from '../pages/login/local-storge.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent  implements OnInit {
  resetPasswordEmail: string='';
  emailValid: boolean = true;
  loginform!: FormGroup;
  showModal: boolean = false;

  constructor(private modalController: ModalController,private authService: AuthenticationService, private formBuilder: FormBuilder, private router: Router,private token:LocalStorgeService) { }

 public alertButtons = ['send'];
  public alertInputs = [
    {
      type: 'email',
      placeholder: 'Email',
    }, 
  ];
  confirmToSend() {
    if (this.checkValidEmail(this.resetPasswordEmail)) {
      this.authService.Forgotpassword(this.resetPasswordEmail).subscribe({
        next: (response) => {
          if (response) {
            this.showModal = false;
            console.log('Password sent successfully.');
          }
        },
        error: (error) => {
          console.log('An error occurred while sending the password. Please try again.');
        }
      });
    }
  }
  checkValidEmail(event: string) {
    const value = event;
    const pattern = /^[a-zA-Z0-9._%+-]+@gmail.com$/i;
    this.emailValid = pattern.test(value);
    return this.emailValid;
  }

  ngOnInit() {}
  

}