import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { Admin } from './admin';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public http:HttpClient) {
    this.http = http;
   }
   baseURL="http://localhost:8080/admin";
   saveUserProfile(formData:FormData):Observable<any>{
     return this.http.post('http://localhost:8080/admin/addit',formData);
   }

   addFood(data:Admin):Observable<object>{
     return this.http.post("http://localhost:8080/admin/add",data);
   }

  getFood():Observable<Admin[]>{
    return this.http.get<Admin[]>("http://localhost:8080/admin/");
 }

 onUpdate(admin:Admin,id:number, ):Observable<object>{
  return this.http.put(`${this.baseURL}/${id}`,admin);
}
   deleteCust(id:string):Observable<object>
   {
      return this.http.delete('http://localhost:8080/cust/'+id+'');
   }
  
}
/**
 * {foodId:number,foodName:string, foodDesc:string, foodPrice:number
    , foodTyep:string,foodImage:string}
 * **/