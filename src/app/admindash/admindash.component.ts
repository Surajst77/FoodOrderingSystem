import { Component,OnInit } from '@angular/core';
import { faCamera ,  faSignature,faTag ,  faDrumstickBite, faLeaf, faLink} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin,faGithub,faSearchengin,faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen, faRegistered,faEnvelope, faNoteSticky, } from '@fortawesome/free-regular-svg-icons';
import { Admin } from '../admin';
import { HttpClient } from '@angular/common/http';
import { AdminService } from '../admin.service';
import {Observable} from 'rxjs';
import { FormBuilder, FormControl } from '@angular/forms';
@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent implements OnInit {

  constructor(private http:HttpClient, private serve: AdminService){}
  ngOnInit(): void {
    this.getFoods();
  }

  icons={
    camera:faCamera,
    git:faGithub,
    price:faTag,
    doc:faEnvelope,
    desc:faNoteSticky,
    name:faSignature,
    type:[faDrumstickBite,faLeaf ],
    imageurl:faLink,
    fb:faFacebookMessenger,
    search:faSearchengin,
    register:faRegistered
  }
    // admin:Admin;
    data:any=Admin;
    datas!:Admin[];
    datas2:Admin;
    url = "http://localhost:8080/admin"
    
    addFood(data:Admin){
      this.serve.addFood(data).subscribe(res=>{console.log(data); }); 
  }

  onDelete(id:number){
       this.http.delete('http://localhost:8080/admin/'+id+'').subscribe(data=>{console.log(data);});
  }
  
  onUpdate(data:any,id:number){
    return this.serve.onUpdate(data,id).subscribe(res=>console.log(res));
  }
 private getFoods(){
    this.serve.getFood().subscribe(data=>{console.log(data);
      this.datas=data
    });
 }

}
