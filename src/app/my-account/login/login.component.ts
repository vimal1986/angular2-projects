import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {UserServices} from "../../services/user-services";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  private validationErrors: string = '';

  constructor(private _formBuilder : FormBuilder , private _userService : UserServices) { }

  onLoginSubmit(value){

    this._userService.doLogin(value).subscribe((data)=> {
      if(!data.status){
        console.log(data.errors);
        this.validationErrors = data.errors;
      }
      else {
        this.validationErrors = '';
      }
      //console.log(data);
    });

  }
  ngOnInit():any {
    this.loginForm = this._formBuilder.group ({
      email : ['', Validators.required],
      password : ['' ,  [Validators.required, Validators.minLength(6),Validators.maxLength(20)]]
    });
  }

}
