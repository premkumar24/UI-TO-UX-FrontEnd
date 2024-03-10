import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(private http: HttpClient) { }

  getRequest(url: String) {
    return this.http.get<any>('http://localhost:8081/'+url);
  }
  postRequest(url: String,postObj:any) {
    return this.http.post<any>('http://localhost:8081/'+url,postObj);
  }
}
