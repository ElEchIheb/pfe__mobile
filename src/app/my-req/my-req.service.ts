import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
const requrl = environment.apiURL+'/request/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class MyReqService {

  constructor(private http: HttpClient,private router: Router,) { }
  SendReq(formData: any): Observable<any> {
    return this.http.post(requrl + 'requests',
      formData
    , httpOptions);
  }
  getReq(){

    return this.http.get(requrl + 'requests');
  }
}
