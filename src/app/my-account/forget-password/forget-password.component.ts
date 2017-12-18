import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {UserServices} from "../../services/user-services";

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  forgetForm : FormGroup;
  private validationErrors: string = '';
  private successMessage: string = '';


  constructor(private _formBuilder : FormBuilder , private _userService : UserServices) { }

  onForgetSubmit(value){

    this._userService.resetPassword(value).subscribe((data)=> {
      console.log(data);
      if(!data.status){
        this.successMessage = '';
        this.validationErrors = data.errors;
      }
      else{
        this.validationErrors = '';
        this.successMessage = data.message;
      }
    });

  }

  ngOnInit():any {
    this.forgetForm = this._formBuilder.group ({
      email : ['', [Validators.required , Validators.email]],
    });
  }

}
