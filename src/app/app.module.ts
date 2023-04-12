import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routingComponents } from './app-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { CustomerService } from './customer.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminService } from './admin.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './modules/admin/components/dashboard/dashboard.component';
import { CartComponent } from './cart/cart.component';
import {MatDialogModule} from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LoginComponent,
    DashboardComponent,
    CartComponent,
    PopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    FontAwesomeModule,
       
  ],
  providers: [CustomerService,AdminService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
