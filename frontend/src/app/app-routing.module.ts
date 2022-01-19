import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './MyComponents/admin/admin.component';
import { AdminLoginComponent } from './MyComponents/admin/adminLogin.component';
import { AnalyticLoginComponent } from './MyComponents/analyticUser/analyticLogin.component';
import { AnalyticUserComponent } from './MyComponents/analyticUser/analyticUser.component';
import { endUserComponent } from './MyComponents/endUser/endUser.component';
import { HomeComponent } from './MyComponents/home/home.component';

const routes: Routes = [
  { path: '',redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'adminLogin', component: AdminLoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'fresher', component: endUserComponent },
  { path: 'analytic', component: AnalyticUserComponent },
  { path: 'analyticLogin', component: AnalyticLoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
