import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/dataservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentuserid = ""
  eventForm = this.fb.group({
    date: [''],
    message: ['']
  })
  

  constructor(private ds: DataService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    if (!localStorage.getItem("token")) {
      alert("Please Login")
      this.router.navigateByUrl("")
    }
  }
  addevent(): void {
    // var userid = this.eventForm.value.acno
    // var password = this.eventForm.value.pswd
    var date = this.eventForm.value.date
    var message = this.eventForm.value.message

    console.log(date);
    console.log(message);



    this.ds.addevent(date, message)
      .subscribe((result: any) => {
        if (result) {
          alert(result.message)
          // this.router.navigateByUrl("event")
        }
      },
        result => {
          alert(result.error.message)
        }
      )

  }
  //Logout
  logout(){
    localStorage.removeItem("currentUser")
    localStorage.removeItem("currentuserid")
    localStorage.removeItem("token")
    this.router.navigateByUrl("")
  }
  //delete account
  deleteAccount() {
    this.currentuserid = JSON.parse(localStorage.getItem("currentuserid") || '')

  }
  cancel(){
    this.currentuserid=""
  }
  onDelete(event:any){
    this.ds.deleteAcc(event)
    .subscribe((result:any) => {
      if(result){
        alert(result.message)
        localStorage.removeItem("currentUser")
        localStorage.removeItem("currentUserid")
        localStorage.removeItem("token")
        this.router.navigateByUrl("")

      }
    },
    result =>{
      alert(result.error.message)
    }
    )

  }

}



