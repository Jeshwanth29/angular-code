import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {AgGridModule} from "@ag-grid-community/angular";
import { MainpageComponent } from './mainpage/mainpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { ManagerComponent } from './manager/manager.component';
import { MRegistrationComponent } from './m-registration/m-registration.component';
import { MdupdateComponent } from './mdupdate/mdupdate.component';
import { FaqComponent } from './faq/faq.component';
import { TermsComponent } from './terms/terms.component';
//import { MdupdateComponent } from './mdupdate/mdupdate.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    DashboardComponent,
    LoginComponent,
    CustomerComponent,
    ManagerComponent,
    MRegistrationComponent,
    MdupdateComponent,
    FaqComponent,
    TermsComponent,
    //ProfileComponent,

    //MdupdateComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([])

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
