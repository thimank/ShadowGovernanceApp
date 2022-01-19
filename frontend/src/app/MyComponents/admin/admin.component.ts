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

  userData = {
    id: 0,
    name: "",
    email: "",
    password: ""
  }

  constructor(private aservice: AnalyticUserService,private router: Router) {
    this.localItem = localStorage.getItem("allUsers");
    this.allUsers = JSON.parse(this.localItem);
  }

  ngOnInit(): void { this.viewAnalyticUsers(); }
  ngDOCheck(): void {
    this.localItem = localStorage.getItem("allUsers");
    this.allUsers = JSON.parse(this.localItem);
  }

  public addAnalyticUser(): void {
    this.aservice.addUser(this.userData);
    alert(" REPORTING USER ADDED SUCCESSFULLY");
  }

  public logout(): void {
    this.router.navigate(['/adminLogin']);
  }

  public viewAnalyticUsers(): void {
    this.aservice.viewAllUsers().then(x => localStorage.setItem('allUsers', JSON.stringify(x)));
    console.log(this.allUsers);
  }
}
