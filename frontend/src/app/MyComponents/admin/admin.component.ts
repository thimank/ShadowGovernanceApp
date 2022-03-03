import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnalyticUserService } from 'src/app/MyServices/analyticUser.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  allUsers: any;
  localItem: any;
  loggedIn = false;
  sessionItem: any;

  userData = {
    id: 0,
    name: "",
    email: "",
    password: ""
  }

  constructor(private aservice: AnalyticUserService, private router: Router) {
    this.localItem = localStorage.getItem("allUsers");
    this.allUsers = JSON.parse(this.localItem);
  }

  ngOnInit(): void {
    this.viewAnalyticUsers();

    this.sessionItem = sessionStorage.getItem('aloggedIn');
    this.loggedIn = JSON.parse(this.sessionItem);

    if (this.loggedIn === false) {
      this.router.navigate(['/adminLogin'])
    }
  }

  ngDOCheck(): void {
    this.localItem = localStorage.getItem("allUsers");
    this.allUsers = JSON.parse(this.localItem);
  }

  public addAnalyticUser(): void {
    this.aservice.addUser(this.userData);
    alert(" REPORTING USER ADDED SUCCESSFULLY");
  }

  public logout(): void {
    this.loggedIn = false;
    sessionStorage.setItem('aloggedIn', JSON.stringify(this.loggedIn));
    this.router.navigate(['/adminLogin']);
  }

  public viewAnalyticUsers(): void {
    this.aservice.viewAllUsers().then(x => localStorage.setItem('allUsers', JSON.stringify(x)));
  }
}
