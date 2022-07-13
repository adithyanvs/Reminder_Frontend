import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, } from '@angular/forms';
import { DataService } from 'src/app/service/dataservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userid =""
  password =""

  loginform =this.fb.group({
    userid:['', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]],
    password:['', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]]
  })
  constructor(private router: Router,private ds:DataService,private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  login() {
    var userid = this.loginform.value.userid
    var password = this.loginform.value.password

    if (this.loginform.valid) {
      //asynchronous
      this.ds.login(userid, password)
      .subscribe((result:any) =>{
        if (result) {
          console.log(result);
          
          localStorage.setItem('currentUser',result.currentUser)
          localStorage.setItem('currentuserid',result.currentuserid)
          localStorage.setItem('token',result.token)
          alert(result.message)
          this.router.navigateByUrl(`eventform`)
        }

      },
      result =>{
        alert(result.error.message)
      })
    }
    else {
      alert("invalid Form")
    }
  }

}
