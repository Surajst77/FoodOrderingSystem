import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from './cart';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient, private router:Router) { }

  cart:Cart
  carts:Cart[]
  baseURL="http://localhost:8080/cust/cart";
  url2="http://localhost:8080/cust/add";
  url3="http://localhost:8080/cust/removecart"
  
   addToCart(cart, id:any):Observable<object>{
    // return this.http.post('http://localhost:8080/cust/add/'+id+'',cart);
    return this.http.post(`${this.url2}/${id}`,cart);
    // (`${this.baseURL}/${id}`,admin);
  }
getCartById(carts,id:string):Observable<Cart[]>{
  return this.http.get<Cart[]>(`${this.baseURL}/${id}`,);
}

  removeFromCart(fid:number, uid:string):Observable<object>{
    return this.http.delete<object>(`${this.url3}/${fid}/${uid}`);
  }
}
