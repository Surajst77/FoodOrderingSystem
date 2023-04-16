import { Component,OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../admin';
import { MatDialog } from '@angular/material/dialog';
import { FoodsComponent } from '../foods/foods.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  ngOnInit(): void {
    this.getFoods();
  }
  constructor(private http:HttpClient, private dialog:MatDialog,private serve: AdminService){}
  onDelete(id:number){
    this.http.delete('http://localhost:8080/admin/'+id+'').subscribe(data=>{console.log(data);});
}

openModal()
{
  this.dialog.open(FoodsComponent);
}

data:any=Admin;
datas:Admin[];
datas2:Admin;
  obj = new FoodsComponent(this.http,this.serve);
  form:any=this.obj.userForm;
url = "http://localhost:8080/admin";
onUpdate(data:any,id:number){
 return this.serve.onUpdate(data,id).subscribe(res=>console.log(res));
}
  private getFoods(){
    this.serve.getFood().subscribe(data=>{console.log(data);
      this.datas=data
    });
 }
}
