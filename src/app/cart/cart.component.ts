import { Component,OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Cart } from '../cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  constructor(private service:CustomerService){}
  datas:Cart[];
  // datas2:Cart[];
  id:any="suraj3@gmail.com"
  ngOnInit(): void {
    this.service.getCartById(this.datas,this.getEmail).subscribe(res=>{console.log(res+ " nothing in here")
      this.datas = res;
      });
  }
    getEmail=localStorage.getItem("email");
    
  removeFromCart(fid:number, uid:string){
    this.service.removeFromCart(fid,uid).subscribe(res=>{console.log(res)});
    window.location.reload();
  }
  randomFixedInteger = function (length) {
     var rand =  Math.floor(Math.pow(10, length-1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length-1) - 1));
     console.log(rand)
}
   order(){
    let myNum = Math.floor(Math.random()* 1000000);
     console.log(myNum);
   }
  // getCartById(datas,id:string){
  //   this.service.getCartById(this.datas,this.id).subscribe(res=>{console.log(res+ " nothing in here")
      
  // });
  // }

}
