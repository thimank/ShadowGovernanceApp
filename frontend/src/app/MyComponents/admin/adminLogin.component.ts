import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/MyServices/admin.service';

@Component({
  selector: 'app-adminLogin',
  templateUrl: './adminLogin.component.html',
  styleUrls: ['./adminLogin.component.css']
})
export class AdminLoginComponent implements OnInit {

  userData={id:0, password:"", loggedIn:false}

  constructor(private aservice:AdminService,private router: Router) { this.userData; }

  ngOnInit(): void { this.userData; }

  public userlogin(): void{
    this.aservice.adminLogin(this.userData).then(x=>{
      if(x==="Login Successful") {this.router.navigate(['/admin']); this.userData.loggedIn=true;}
      else {alert("     LOGIN UNSUCCESSFUL!! \n      Check Your Credentials"); this.userData.loggedIn=false;}
    });
    console.log(this.userData);
  }

}
