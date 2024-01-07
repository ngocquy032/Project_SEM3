import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './fe-user/users/log-in/log-in.component';
import { SigupComponent } from './fe-user/users/sigup/sigup.component';
import { MasterLayoutComponent } from './fe-user/master-layout/master-layout.component';
import { HomeComponent } from './fe-user/home/home.component';
import { ContactUsComponent } from './fe-user/contact-us/contact-us.component';
const routes: Routes = [
  {
    path: '', component: MasterLayoutComponent,
    children: [
      //layout component trong day
      {
        path: '', component: HomeComponent
      },
      {
        path : 'contactUs', component: ContactUsComponent
      }
    ]
  },
  {
    path: 'login', component: LogInComponent
  },
  {
    path: 'sigup', component: SigupComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
