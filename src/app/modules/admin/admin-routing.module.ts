import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserComponent } from './components/user/user.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';

const routes: Routes = [
  {path:'',
  component:DashboardComponent,
  
  children:[
    {path:'user',component:UserComponent},
    {path:'order', component:OrdersComponent},
    {path:'dash',component:AdminhomeComponent},
    {path:'',redirectTo:'admin/dash',pathMatch:'full'},
  
],
},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
