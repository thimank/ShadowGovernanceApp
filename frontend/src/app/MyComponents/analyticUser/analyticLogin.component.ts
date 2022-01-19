import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnalyticUserService } from 'src/app/MyServices/analyticUser.service';

@Component({
  selector: 'app-analyticLogin',
  templateUrl: './analyticLogin.component.html',
  styleUrls: ['./analyticLogin.component.css']
})
export class AnalyticLoginComponent implements OnInit {

  userData={id:0, password:"", loggedIn:false}

  constructor(private aservice:AnalyticUserService,private router: Router) { 
    this.userData;
  }
  ngOnInit(): void { if (this.userData.loggedIn === false){this.router.navigate(['/analyticLogin'])}}

  public userlogin(): void{
    this.aservice.analyticLogin(this.userData).then(x=>{
      if(x==="Login Successful") {this.router.navigate(['/analytic']); this.userData.loggedIn=true;}
      else {alert("     LOGIN UNSUCCESSFUL!! \n      Check Your Credentials"); this.userData.loggedIn=false;}
    });
  }

}
