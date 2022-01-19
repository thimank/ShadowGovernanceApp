import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endUser } from '../MyComponents/endUser/endUser';

@Injectable({
  providedIn: 'root'
})
export class EndUserService {

  constructor(private http:HttpClient) { }

  public registerEnduser(user: endUser){
    return this.http.post("http://localhost:1234/addUser",user).toPromise()
    .then(response => response as endUser)
    .catch(this.handleError);
  }

  public getEndUsers() {
    return this.http.get("http://localhost:1234/allUsers").toPromise()
    .then(response => response as endUser )
    .catch(this.handleError);
  }
  public getUser(id:number){
    return this.http.get("http://localhost:1234/getUser/"+id).toPromise()
    .then(response => response as endUser )
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<Array<any>> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
    }
}
