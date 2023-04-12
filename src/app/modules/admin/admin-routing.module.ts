import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserComponent } from './components/user/user.component';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [
  {path:'',component:DashboardComponent,
  children:[{path:'/user',component:UserComponent},
            {path:'orders', component:OrdersComponent}
  
]
},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
