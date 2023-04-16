import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Customer } from '../customer';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-uzers',
  templateUrl: './uzers.component.html',
  styleUrls: ['./uzers.component.css']
})
export class UzersComponent implements OnInit{


  constructor(private http:HttpClient){}


  ngOnInit(): void {
   this.getUsers(); 
  }
  user:Customer[];

  getUser():Observable<Customer[]>{
    return this.http.get<Customer[]>('http://localhost:8080/cust/');
  }
  getUsers(){
    this.getUser().subscribe(res=>{
      this.user = res;
      console.log(res)
    });
  }
  url="http://localhost:8080/cust"
  deleteUser(id:string){
      return this.http.delete(`${this.url}/${id}`);
  }


}
