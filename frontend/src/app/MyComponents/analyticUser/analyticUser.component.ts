import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnalyticUserService } from 'src/app/MyServices/analyticUser.service';
import { ExportService } from 'src/app/MyServices/export.service';
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
  criteria: taskDetails = new taskDetails("", "", "", "", false);
  loggedIn = false;
  sessionItem: any;

  constructor(private aservice: AnalyticUserService, private eservice: ExportService, private router: Router) {
    this.localItem = localStorage.getItem("users");
    this.endusers = JSON.parse(this.localItem);

    this.sessionItem = sessionStorage.getItem('rloggedIn');
    this.loggedIn = JSON.parse(this.sessionItem);

    if (this.loggedIn === false) {
      this.router.navigate(['/analyticLogin'])
    }
  }

  ngOnInit(): void {
    this.localItem = localStorage.getItem("users");
    this.endusers = JSON.parse(this.localItem);
  }
  ngDoCheck(): void {
    this.localItem = localStorage.getItem("users");
    this.endusers = JSON.parse(this.localItem);
  }

  public createReport(): void {
    this.criteria.fromDate = this.criteria.fromDate.toString();
    this.criteria.toDate = this.criteria.toDate.toString();
    this.aservice.endUserReport(this.criteria).then(x => localStorage.setItem('users', JSON.stringify(x)));
  }

  public logout(): void {
    this.loggedIn = false;
    sessionStorage.setItem('rloggedIn', JSON.stringify(this.loggedIn));
    this.router.navigate(['/analyticLogin']);
  }

  public exportData(): void {
    this.eservice.exportToExcel(this.endusers, "Report")
  }

}
