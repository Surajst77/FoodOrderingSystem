import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { HttpClient } from '@angular/common/http';
import { faCamera ,  faSignature,faTag ,  faDrumstickBite, faLeaf, faLink} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin,faGithub,faSearchengin,faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen, faRegistered,faEnvelope, faNoteSticky, } from '@fortawesome/free-regular-svg-icons';
import { Admin } from '../admin';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent {
  


  constructor(private http:HttpClient, private serve: AdminService){}


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
  userForm:FormGroup
  data:any=Admin;
  datas!:Admin[];
  datas2:Admin;
  addFood(data:Admin){
    this.serve.addFood(data).subscribe(res=>{console.log(data); }); 
}

}
