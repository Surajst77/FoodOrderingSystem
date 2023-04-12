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
}
