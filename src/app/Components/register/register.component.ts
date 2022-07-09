import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/dataservice.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username =''
  userid =''
  password =''

  RegisterForm=this.fb.group({
    userName:['',[Validators.required,Validators.pattern('[a-zA-Z0-9 ]*')]],
    userId:['',[Validators.required,Validators.pattern('[0-9]*')]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9 ]*')]]
  })
  constructor(private ds: DataService, private router: Router,private fb :FormBuilder) { }

  ngOnInit(): void {
  }
  register() {
    var username = this.RegisterForm.value.userName
    var userid = this.RegisterForm.value.userId
    var password = this.RegisterForm.value.password

    if (this.RegisterForm.valid) {
      //asynchronous
      this.ds.register(username,userid,password)
        .subscribe((result:any) => {
          if (result) {
            alert(result.message)
            this.router.navigateByUrl("")
          }
        },
          result => {
            alert(result.error.message)//used to display 400 series error msg
          }
        )
    }
    else {
        alert("Invalid Form")
      }
    }


}
