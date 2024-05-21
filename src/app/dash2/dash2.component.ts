import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import axios from 'axios';
import cheerio from 'cheerio';
import { AuthenticationService } from '../pages/login/authentication.service';

interface Event {
  title: string;
  date: string;
  location: string;
}

@Component({
  selector: 'app-dash2',
  templateUrl: './dash2.component.html',
  styleUrls: ['./dash2.component.scss'],
})
export class Dash2Component implements OnInit {
  
  myform!: any;
  firstName: any;
  lastName: any;
  dataSource: any;

  constructor( private profileService:AuthenticationService,private FormBuildr: FormBuilder) {}

  ngOnInit() {
    this.myform = this.FormBuildr.group({
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
      
        this.firstName=data.firstName;
        this.lastName=data.lastName;
        
        
        this.myform = this.FormBuildr.group({
          firstName: [data.firstName, Validators.required],
          lastName: [data.lastName, Validators.required],
         
    });
      console.log(' details : ', data);


    });
  }

}
