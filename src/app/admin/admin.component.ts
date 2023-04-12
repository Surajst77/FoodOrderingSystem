import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit  {
  
  ngOnInit():void{
   this.Form = this.fb.group({
     email:['',[Validators.required, Validators.email]],
     password:['',[Validators.required, Validators.minLength(5)]],
   })
  }
  constructor(private adminService:AdminService,private router:Router, private fb:FormBuilder, private auth: AuthService){
      
  }
  public userFile:any=File;
  // formGroup:any=FormGroup
  private contact:FormGroup
  reactiveForm = new FormGroup({
    foodId:new FormControl(''),
    foodName:new FormControl(''),
    foodDesc:new FormControl(''),
    foodPrice:new FormControl(''),
    foodType:new FormControl(''),
    foodImage:new FormControl(''),
  });
 Form:FormGroup;
   
  onSubmit(){
    if(this.Form.valid){
    console.log(this.Form.value);}
    else{

    }
  }
  su(){
    const em = this.Form.value.email;
    const pwd=this.Form.value.password;
    localStorage.setItem("adEmail",em)
    localStorage.setItem("adpwd",pwd)
    if(this.Form.value.email == "admin@gmail.com")
    {
      if(this.Form.value.password == "admin")
      {
        alert("Login Successful");
        this.router.navigate(['/dashboard'])
      }
      else alert("Password is incorrect");
    }
    else alert("Invalid Email")
    console.log(em);
  }
}
