import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


import { environment } from 'src/environments/environment';
import { LocalStorgeService } from './local-storge.service';
const bulletinUrl = environment.apiURL+'/bulletin/'; // URL de votre bulletin
const AUTH_API = environment.apiURL+'/auth/';
const apiURL = environment.apiURL;
 const  baseUri = apiURL+'/profile';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  tokenService: any;


  constructor(private http: HttpClient, private router: Router,private token:LocalStorgeService,) {}
  login(data:any): Observable<any> {
    return this.http.post(AUTH_API + 'login',{
      data
    }, httpOptions);

  }
  isLoggedIn(): boolean {
    return this.token.getAccessToken() !== null;
  }



  Forgotpassword(email: string): Observable<any> {
    return this.http.post(AUTH_API + 'forgetpassword', {
      email
    }, httpOptions);

  }
  envoyerBulletin(formData: any): Observable<any> {
    // Envoi du formulaire de bull de soin  vers l'API
    return this.http.post(bulletinUrl + 'bulletins',
      formData
    , httpOptions);
  }
  recBulletin() {
    // Envoi du formulaire de bull de soin  vers l'API
    return this.http.get(bulletinUrl + 'bulletins');
  }
  getProfileDetails(){

    return this.http.get(baseUri);
  }
  updateProfile(data:any): Observable<any> {

    let url = baseUri+'/putProfile';
   console.log(data)
    return this.http.put(url, data,{ observe: 'response'});

  }
  changePassword(data: any): Observable<any> {
    return this.http.put(apiURL+'/changePassword', data);
  }

}

