import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  public adminLogin(data:any){
    return this.http.post("http://localhost:1234/adminLogin",data,{responseType: 'text'}).toPromise()
    .then(response => response as any)
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<Array<any>> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
    }
}
