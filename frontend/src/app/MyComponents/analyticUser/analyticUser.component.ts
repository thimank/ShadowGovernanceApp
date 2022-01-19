import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnalyticUserService } from 'src/app/MyServices/analyticUser.service';
import { EndUserService } from 'src/app/MyServices/endUser.service';
import { endUser } from '../endUser/endUser';
import { taskDetails } from '../endUser/taskDetails';

@Component({
  selector: 'app-analyticUser',
  templateUrl: './analyticUser.component.html',
  styleUrls: ['./analyticUser.component.css']
})
export class AnalyticUserComponent implements OnInit {

  endusers: endUser[];
  localItem: any;
  criteria: taskDetails = new taskDetails("","","","",false);

  constructor(private aservice:AnalyticUserService,private router: Router) { 
    this.localItem = localStorage.getItem("users");
    this.endusers = JSON.parse(this.localItem);
  }

  ngOnInit(): void {
    this.localItem = localStorage.getItem("users");
    this.endusers = JSON.parse(this.localItem);
  }
  ngDoCheck():void{
    this.localItem = localStorage.getItem("users");
    this.endusers = JSON.parse(this.localItem);
  }

  public createReport(): void{
    this.criteria.fromDate=this.criteria.fromDate.toString();
    this.criteria.toDate=this.criteria.toDate.toString();
    this.aservice.endUserReport(this.criteria).then(x=> localStorage.setItem('users',JSON.stringify(x)));
  }

  public logout(): void {
    this.router.navigate(['/analyticLogin']);
  }

}
