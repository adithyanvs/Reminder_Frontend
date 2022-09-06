import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/dataservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-eventform',
  templateUrl: './eventform.component.html',
  styleUrls: ['./eventform.component.css']
})
export class EventformComponent implements OnInit {
  events:any
  currentuserid =localStorage.getItem('currentuserid')
  
  constructor(private ds :DataService,private router: Router) {
    this.ds.getEvent(this.currentuserid)
    .subscribe((result:any) =>{
      console.log(result);
      this.events =result.event
      
    },
    result =>{
      alert(result.error.message)
    })
   }

  ngOnInit(): void {
    
  }
  deleteAccount(){
    
  }
  //Logout
  logout(){
    localStorage.removeItem("currentUser")
    localStorage.removeItem("currentuserid")
    localStorage.removeItem("token")
    this.router.navigateByUrl("")
  }
}
