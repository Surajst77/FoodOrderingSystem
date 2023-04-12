import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'
import { AdminComponent } from './admin/admin.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { LandingComponent } from './landing/landing.component';
import { CartComponent } from './cart/cart.component';
import { AuthGuard } from './guards/auth.guard';
import { PopupComponent } from './popup/popup.component';

const routes: Routes = [
  {path:'',  redirectTo:'landing',pathMatch:'full'},
  {path:'landing',component:LandingComponent},
  {path:'customer',component:CustomerComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'admin',component:AdminComponent},
  {path:'dashboard',component:AdmindashComponent},
  {path:'cart',component:CartComponent},
  {path:'mod',component:PopupComponent},
  {path:'**', component:PageNotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [CustomerComponent, LandingComponent,LoginComponent,
                                  PageNotFoundComponent,AdminComponent
                                 ,HomeComponent,AdmindashComponent];