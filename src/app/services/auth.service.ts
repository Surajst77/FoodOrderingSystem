import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http:HttpClient,private router:Router) { }
  url="http://localhost:8080/admin/login"
  setToken(token:string):void{
    localStorage.setItem('token',token);
  }

  getToken():string |null{
return localStorage.getItem('token');
  }

  isLoggedIn()
  {
    return this.getToken()!==null;
  }

  logout()
  {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  login({email,password}:any):Observable<any>
  {
    if(email==='admin@gmail.com'&& password==='admin')
    {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({name:'admin',email:'admin@gmail.com'});
    }
  return throwError(new Error('Failed to Login le pa'));
  }
signIn(email,password){
  this.http.post<any>(`${this.url}`,{email:email,password:password,returnSecureToken:true});
}
}
