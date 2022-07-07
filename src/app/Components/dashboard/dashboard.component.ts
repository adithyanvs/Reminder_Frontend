import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

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

  
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  event(){
    console.log("click");
    
  }
}
