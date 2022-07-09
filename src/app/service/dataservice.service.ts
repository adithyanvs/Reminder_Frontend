import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const options = {
  headers: new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser: any
  currentuserid: any

  constructor(private http: HttpClient) {

  }

  //regiser
  register(username: any, userid: any, password: any) {
    const data = {
      username,
      userid,
      password
    }
    //asynchronous 
    return this.http.post('http://localhost:3000/register', data)
  }

  login(userid: any, password: any) {

    const data = {
      userid,
      password
    }
    //asynchronous.....
    return this.http.post('http://localhost:3000/login', data)
  }
}
