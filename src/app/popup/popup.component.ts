import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit{

  ngOnInit(): void {
    // Validators.minLength(16)
    this.Form = this.fb.group({
      cardNo:['',[Validators.required,  Validators.minLength(16)]],
      cvv:['',[Validators.required, Validators.minLength(3)]],
      expiry:['',[Validators.required, Validators.minLength(7)]]
    })
  }
  constructor(private fb:FormBuilder,private dialogRef : MatDialog){}

  Form:FormGroup;

  closeDialog(){
    if(this.Form.valid)
    {
      alert('Your order has been placed')
      this.dialogRef.closeAll();}
  }
  
  data=[{imgid:"https://images.pexels.com/photos/7813573/pexels-photo-7813573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
{imgid:"https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"},
{imgid:"https://images.pexels.com/photos/5602502/pexels-photo-5602502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},

,{crdtitle:"title1"},{crdtitle:"title2"},{crdtitle:"title3"}
,{crdbody:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"},
{crdbody:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that "},
{crdbody:"it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."}

]
}
