import { HttpClient } from '@angular/common/http';
import { Component,Input,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/internal/Observable';
import { Customer } from '../customer';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  // `
  // <button class="btn btn-info">Submit</button>
  // <table class="table table-info table-striped-columns text-center table-hover">
  //   <thead> <tr>

  //     <th>
  //       Email
  //     </th>
  //     <th>
  //       First Name
  //     </th>
  //     <th>
  //       Last Name
  //     </th>
  //     <th>
  //       Password      
  //     </th>
  //   </tr>
  //  </thead>
  //   <tbody>
    
  //     <tr *ngFor="let cust of customers">
  //       <td> {{cust.email}} </td>
  //       <td> {{cust.custFirstName}} </td>
  //       <td> {{cust.custLastName}} </td>
  //       <td> {{cust.password}} </td>
  //       <input type="submit" value="Delete" class="btn btn-danger">
  //     </tr>
  //   </tbody>
  // </table>
  
  
  // `, 
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id:string;
  
  
  ngOnInit():void{
    this.getEmployees().subscribe(data => this.customers = data);
    this.loginForm = this.fb.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(6)]],
    })
  }
  child:any;
  // loginForm = new FormGroup({
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  // });
  // onSubmit(): void {
  //   if (this.loginForm) {
  //     this.auth.login(this.loginForm.value).subscribe(
  //       (result) => {
  //         console.log(result);
  //         this.router.navigate(['/dashboard']);
  //       },
  //       (err: Error) => {
  //         console.warn(err.message);
  //       }
  //     );
  //   }
  // }
  image:string="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-photo%2Fchicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg%3Fw%3D2000&tbnid=A7iJA5G236bFqM&vet=12ahUKEwiBwKzp-v39AhUU-nMBHZ77BeUQMygCegUIARDkAQ..i&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Fphotos%2Ffood&docid=RB__2DxE3HJa8M&w=2000&h=1305&q=food&ved=2ahUKEwiBwKzp-v39AhUU-nMBHZ77BeUQMygCegUIARDkAQ"
  constructor(private http:HttpClient, private fb:FormBuilder,private router:Router,private auth:AuthService){}
 
  loginCustomer(data:{email:any, password:string}){
      this.http.post('http://localhost:8080/cust/login',data).subscribe((res)=> {
      
      let {status, message}:any=res;
      console.log("Message: "+message+"\nStatus: "+status)

      status ? this.router.navigate(['/home']) : document.getElementById("msg").innerText = message;
      // document.getElementById("msg2").innerText = data.email
      console.log(res)});
      this.child=data.email;
      localStorage.setItem("email",this.child)
      
  }
  loginForm:FormGroup;

  customers:any=[];
  url:string="http://localhost:8080/cust/"
  getEmployees():Observable<Customer[]> {
    return this.http.get<Customer[]>(this.url);
  }
  
  homePage(){
    this.router.navigate(['']);
  }
  // login(){
  //   if(this.Form.valid)
  //   {
  //     this.loginCustomer().
  //   }
  // }
}



// unsplash website for high definition photos
// pexels.com website for high definition photos
// Canva website for high definition Templates
// pixabay.com
// elements.envato.com 
//colors.depely.top for excellent radient colors