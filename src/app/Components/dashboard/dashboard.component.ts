import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/dataservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  eventForm =this.fb.group({
    date:['', [Validators.required, Validators.pattern('[0-9 ]*')]],
    text:['', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]],
  })

  
  constructor(private ds: DataService,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    if(!localStorage.getItem("token")){
      alert("Please Login")
      this.router.navigateByUrl("")
    }
  }
  addevent(): void {
    // var userid = this.eventForm.value.acno
    // var password = this.eventForm.value.pswd
    var date =this.eventForm.value.date
    var event = this.eventForm.value.text
    if(this.eventForm.valid){
    const result = this.ds.addevent(date, event)
    .subscribe((result:any) =>{
      if(result){
        alert(result.message)
      }
    },
    result =>{
      alert(result.error.message)
    }
    )
    
  }
  else{
      alert("invalid Form")
    }
  }

  
}
