import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/dataservice.service';

@Component({
  selector: 'app-eventform',
  templateUrl: './eventform.component.html',
  styleUrls: ['./eventform.component.css']
})
export class EventformComponent implements OnInit {
  events:any
  currentuserid =localStorage.getItem('currentuserid')
  
  constructor(private ds :DataService) {
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

}
