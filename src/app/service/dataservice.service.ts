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
  //token resolving in database
  getOptions() {
    const token = localStorage.getItem('token')
    let headers = new HttpHeaders()
    if (token) {
      headers = headers.append('x-access-token', token)
      options.headers = headers
    }
    return options
  }

  //1.Regiser
  register(username: any, userid: any, password: any) {
    const data = {
      username,
      userid,
      password
    }
    //asynchronous 
    return this.http.post('http://localhost:3000/register', data)
  }
  //2.Login
  login(userid: any, password: any) {

    const data = {
      userid,
      password
    }
    //asynchronous.....
    return this.http.post('http://localhost:3000/login', data)
  }
  //3.Add event
  addevent(date: any, message: any) {

    const data = {
      date, message
    }

    return this.http.post('http://localhost:3000/addevent',
      data, this.getOptions())
  }
  //Get event
  getEvent(currentuserid: any) {
    const data = {
      currentuserid
    }
    return this.http.post('http://localhost:3000/getEvent',
      data, this.getOptions())
  }
  //delete account
  deleteAcc(currentuserid: any) {
    return this.http.delete('http://localhost:3000/deleteAcc/' + currentuserid, this.getOptions())

  }
//remove event
removeEvent(k:any){
  const data ={
    k
  }
  return this.http.post('http://localhost:3000/deleteevent',data,this.getOptions())
}

}
