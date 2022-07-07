import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform =this.fb.group({
    userid:['', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]],
    password:['', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]]
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
login(){
  
}
}
