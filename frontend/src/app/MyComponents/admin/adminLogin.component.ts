import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/MyServices/admin.service';

@Component({
  selector: 'app-adminLogin',
  templateUrl: './adminLogin.component.html',
  styleUrls: ['./adminLogin.component.css']
})
export class AdminLoginComponent implements OnInit {

  userData={id:0, password:""}
  loggedIn = false;
  sessionItem: any;

  constructor(private aservice:AdminService,private router: Router) {
    this.sessionItem = sessionStorage.getItem('aloggedIn');
    this.loggedIn = JSON.parse(this.sessionItem);
  }

  ngOnInit(): void { }

  public userlogin(): void{
    this.aservice.adminLogin(this.userData).then(x=>{
      if(x==="Login Successful") {
        this.router.navigate(['/admin']); 
        this.loggedIn=true;
        sessionStorage.setItem('aloggedIn', JSON.stringify(this.loggedIn));
      }
      else {
        alert("     LOGIN UNSUCCESSFUL!! \n      Check Your Credentials"); 
        this.loggedIn=false;
      }
    });
  }

}
