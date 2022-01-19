import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { endUserComponent } from './MyComponents/endUser/endUser.component';
import { EndUserService } from './MyServices/endUser.service';
import { AnalyticUserComponent } from './MyComponents/analyticUser/analyticUser.component';
import { AnalyticLoginComponent } from './MyComponents/analyticUser/analyticLogin.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { AdminComponent } from './MyComponents/admin/admin.component';
import { AdminLoginComponent } from './MyComponents/admin/adminLogin.component';

@NgModule({
  declarations: [
    AppComponent,
    endUserComponent,
    AnalyticUserComponent,
    AnalyticLoginComponent,
    HomeComponent,
    AdminComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EndUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
