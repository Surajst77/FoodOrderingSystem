import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, ViewEncapsulation, ElementRef } from '@angular/core';
import { Customer } from '../customer';
import { Observable } from 'rxjs';
import { AdminService } from '../admin.service';
import { AdmindashComponent } from '../admindash/admindash.component';
import { Admin } from '../admin';
import { Food } from '../food';
import { Cart } from '../cart';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit{
  
  constructor(private http:HttpClient,private serve: AdminService,
     private custService:CustomerService,private router:Router, private dialogRef : MatDialog){}

  @Input() public parentData:any; /**Component Interaction in Angular and this is parent Data**/
    openDialog(){
      this.dialogRef.open(PopupComponent);
    }
  custs:Customer[];
  cart:Cart
  addbtn="Add To Cart";
  ngOnInit():void{
    // this.getCust().subscribe(data => this.custs = data);
    this.getFoods();
    
  }
  
  
  // public child:Admin[];   /** Component Interaction in angular and this is child comp**/
  url:string="http://localhost:8080/cust/";
  getCust():Observable<Customer[]>{
    return this.http.get<Customer[]>(this.url);
  }

  deleteCust(id:string){
    this.serve.deleteCust(id).subscribe(data=>{console.log(data);
    this.getCust();
    })
  }
  emailId="suraj3@gmail.com"

  addToCart(cart, id:any){
    this.custService.addToCart(cart,id).subscribe(res=>console.log(res));
    // this.addbtn = "Added to cart";
      
  }
  logout()
  {
    localStorage.removeItem("email");
    this.router.navigate(['/login'])
  }
  
  
  getEmail = localStorage.getItem("email");


  // deleteEmployee(id:number)
  // {
  //   this.employeeService.deleteEmployee(id).subscribe(data=>
  //     {
  //       console.log(data);
  //       this.getEmployees();
  //     })
  // }
  datas!:Admin[];
  food:any=Food;
  private getFoods(){
    this.serve.getFood().subscribe(data=>{console.log(data);
      this.datas=data
    });
 }
  //  addToCart(food,id:number){
    
  //   this.http.post("http://localhost:8080/cust/addtocart",id);
  // }
  
}
