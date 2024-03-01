import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { login } from '../interfaces/login.interfaces';
import { register } from '../interfaces/register.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  
  registerUser(user_details:register){
    return this.http.post<{message:string, error:string}>('http://localhost:4100/users', user_details)
  }

  loginUser(user_details:login ){
    return this.http.post<{message:string, token:string, error:string}>('http://localhost:4100/auth/login', user_details)
  }

  readToken(callback: (response: any) => void, errorCallback: (error: any) => void){

    const token = localStorage.getItem('authToken');

    if (!token) {
      errorCallback('No token found in local storage.');
      return;
    }


    console.log(token)
    this.http.get<{info:{id:string, email: string, role:string}}>('http://localhost:4100/auth/checkdetails', {
      headers: new HttpHeaders( {
        'Content-type': 'application/json',
        'token': token

      })
    }).subscribe(res=>callback(res))
  }

}
