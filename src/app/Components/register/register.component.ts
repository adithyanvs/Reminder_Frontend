import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  RegisterForm=this.fb.group({
    userName:['',[Validators.required,Validators.pattern('[a-zA-Z0-9 ]*')]],
    userId:['',[Validators.required,Validators.pattern('[0-9]*')]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9 ]*')]]
  })
  constructor(private fb :FormBuilder) { }

  ngOnInit(): void {
  }
  register(){
    console.log("register clicked");
    
  }

}
