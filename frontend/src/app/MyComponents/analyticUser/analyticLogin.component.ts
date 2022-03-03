import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnalyticUserService } from 'src/app/MyServices/analyticUser.service';

@Component({
  selector: 'app-analyticLogin',
  templateUrl: './analyticLogin.component.html',
  styleUrls: ['./analyticLogin.component.css']
})
export class AnalyticLoginComponent implements OnInit {

  userData = { id: 0, password: "" }
  loggedIn = false;
  sessionItem: any;

  constructor(private aservice: AnalyticUserService, private router: Router) {
    this.sessionItem = sessionStorage.getItem('rloggedIn');
    this.loggedIn = JSON.parse(this.sessionItem);
  }
  ngOnInit(): void { }

  public userlogin(): void {
    this.aservice.analyticLogin(this.userData).then(x => {
      if (x === "Login Successful") {
        this.router.navigate(['/analytic']);
        this.loggedIn = true;
        sessionStorage.setItem('rloggedIn', JSON.stringify(this.loggedIn));
      }
      else {
        alert("     LOGIN UNSUCCESSFUL!! \n      Check Your Credentials");
        this.loggedIn = false;
        sessionStorage.setItem('rloggedIn', JSON.stringify(this.loggedIn));
      }
    });
  }

}
