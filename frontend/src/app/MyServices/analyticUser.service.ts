import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endUser } from '../MyComponents/endUser/endUser';
import { taskDetails } from '../MyComponents/endUser/taskDetails';

@Injectable({
  providedIn: 'root'
})
export class AnalyticUserService {

  constructor(private http:HttpClient) { }

  public endUserReport(criteria:taskDetails){
    return this.http.post("http://localhost:1234/report",criteria).toPromise()
    .then(response => response as endUser)
    .catch(this.handleError);
  }

  public analyticLogin(data:any){
    return this.http.post("http://localhost:1234/analyticLogin",data,{responseType: 'text'}).toPromise()
    .then(response => response as any)
    .catch(this.handleError);
  }

  public addUser(data:any){
    return this.http.post("http://localhost:1234/addAnalytic",data).toPromise()
    .then(response => response as any)
    .catch(this.handleError);
  }

  public viewAllUsers(){
    return this.http.get("http://localhost:1234/allAnalytic").toPromise()
    .then(response => response as any)
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<Array<any>> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
    }
  
}
