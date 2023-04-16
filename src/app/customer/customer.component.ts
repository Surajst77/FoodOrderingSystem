import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin,faGithub, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  
  errors:string;

  regForm:FormGroup;
  
  ngOnInit():void {
    this.regForm = this.fb.group({
      email:['',[Validators.required, Validators.email]],  
      custFirstName:['',[Validators.required, Validators.minLength(3)]],
      custLastName:['',[Validators.required, Validators.minLength(1)]],
      password:['',[Validators.required, Validators.minLength(6)]],
      cnfrmPassword:['',[Validators.required, Validators.minLength(6)]],
    },{ validators: this.checkPasswords });
    
  }
  icons={
    camera:faCamera,
    git:faGithub,
    doc:faEnvelopeOpen,
    fb:faFacebookMessenger
  }
  constructor(private http:HttpClient,private fb:FormBuilder,private router:Router){}

  onSubmit(data:{email:string,custFirstName:string, custLastName:string,  password:string, cnfrmPassword:string}){
        console.log(data)
        this.http.post('http://localhost:8080/cust',data).subscribe((res)=>{
          let {status, message}:any=res;
          console.log(res)
          console.log("message is: "+message+" status is: "+status)
        if(status === true)
        {
          document.getElementById("scss").innerText = "You are registered with us, please go to login Page";
            // window.location.reload();
            // this.router.navigate(['/home']);
            console.log("Welcome to FOS ")
        }  else document.getElementById("ptag").innerText = message;
        
      },(err)=>{
        let {error,ok}:any=err;
        this.errors = err;
        console.log("this is 2nd callback: "+ok)
        if(error.includes("Last Name cannot be empty"))
        document.getElementById("lastName").innerText ="Last Name cannot be empty";
        if(error.includes("Customer Name cannot be Empty"))
        document.getElementById("firstName").innerText = "Customer Name cannot be Empty";
        if(error.includes("Id cannot be empty"))
        document.getElementById("custEmail").innerText = "Email Id cannot be empty";
        if(ok == false)
        {
          // console.log("Error Message")
          throw new Error;
        }
        this.router.navigate(['/home']);
        
        console.log("erros: "+this.errors)
      });
    }
    checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
      let pass = group.get('password').value;
      let confirmPass = group.get('cnfrmPassword').value
      return pass === confirmPass ? null : { notSame: true }
    }
}
