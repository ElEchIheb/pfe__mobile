import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorgeService } from './pages/login/local-storge.service';
import { AuthenticationService } from './pages/login/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dxc', url: '/folder/inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  dataSource: any;
  firstName: any;
  lastName: any;
  telephone: any;
  email: any;
  myform!: FormGroup;
  imageUrl: any;
  imageName: any;
  apiURL = environment.apiURL;
  local_data: any;
  data: any;
  action: any;

  constructor(private router: Router,private token:LocalStorgeService,private profileService:AuthenticationService,private FormBuildr: FormBuilder) {
    this.local_data = { ...this.data };
    this.action = this.local_data.action;
    if (this.local_data.imagePath === undefined) {
      this.local_data.imagePath = 'assets/user.jpg';
    } 
    
  }
   


   
  isLoginPage(): boolean {
    return this.router.url === '/login';
  }
  logout(): void {
    this.token.deleteAccessToken();
    this.token.deleteRefreshToken();
    this.token.deleteRole();

    this.router.navigate(['/login']);
  }
  ngOnInit() {
    this.myform = this.FormBuildr.group({
      file: [null],
      firstName: ["", Validators.required],
      lastName: [, Validators.required],
      telephone: ["", [Validators.minLength(8)]],
      email:["", Validators.required],
});
this.profileDetails()
  }
  profileDetails(){
    this.profileService.getProfileDetails().subscribe((data: any) => {
      this.dataSource=data;
     console.log(data)
        this.imageName=data.imageName;
        if(data.imageName==null){
          this.imageUrl='assets/user.jpg'
        }else{
        this.imageUrl=`${this.apiURL}/${this.imageName}`;}
        this.firstName=data.firstName;
        this.lastName=data.lastName;
        this.telephone= data.telephone;
        this.email=data.email;
        
        this.myform = this.FormBuildr.group({
          file: [null],
          firstName: [data.firstName, Validators.required],
          lastName: [data.lastName, Validators.required],
          telephone: [data.telephone, [Validators.minLength(8)]],
          email:[data.email, Validators.required],
    });
      console.log('team member details : ', data);


    });
  }

}