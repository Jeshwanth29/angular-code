import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule  } from '@angular/forms';
import{MainpageComponent} from './mainpage/mainpage.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import{CustomerComponent} from './customer/customer.component';
import { ManagerComponent } from './manager/manager.component';
import { MRegistrationComponent } from './m-registration/m-registration.component';
import { MdupdateComponent } from './mdupdate/mdupdate.component';
import { FaqComponent} from './faq/faq.component';
import {TermsComponent} from './terms/terms.component';
//import { ProfileComponent } from './profile/profile.component';

//import{ AgentComponent } from './agent/agent.component';
//import{AgentregistrationComponent} from './agentregistration/agentregistration.component';
//import { AdminupdatecomponentComponent } from './adminupdatecomponent/adminupdatecomponent.component';

const routes: Routes = [

 { path:'',redirectTo:'mainpage',pathMatch:'full'},
 { path:'mainpage', component:MainpageComponent },
 { path:'login', component:LoginComponent},
 { path:'dashboard', component:DashboardComponent },
 { path:'customer',component:CustomerComponent},
 { path:'manager',component:ManagerComponent},
 { path:'m-registration',component:MRegistrationComponent},
 {path:'mdupdate',component:MdupdateComponent},
 {path:'faq',component:FaqComponent},
 {path:'terms',component:TermsComponent},
 //{path:'profile', component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
