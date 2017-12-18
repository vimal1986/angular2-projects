import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {UserServices} from "../../services/user-services";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  regForm : FormGroup;

  constructor(private _formBuilder : FormBuilder , private _userService : UserServices) { }

  onRegSubmit(value){

      this._userService.submitRegister(value).subscribe((data)=> {
          console.log(data);
      });

  }

  equalto(field_name): ValidatorFn {
      return (control: AbstractControl): {[key: string]: any} => {

          let input = control.value;

          let isValid=control.root.value[field_name]==input;

          if(!isValid){
              return { 'equalTo': {isValid} }
          }
          else{
              return null;
          }

      };
  }

  ngOnInit():any {

      this.regForm = this._formBuilder.group({
          'first_name' : ['' , Validators.required] ,
          'last_name'  : ['' , Validators.required] ,
          'mobile'     : ['' , [Validators.required, Validators.minLength(10),Validators.maxLength(15)]] ,
          'email'     : ['' , [Validators.email ,Validators.required]] ,
          'password'     : ['' ,  [Validators.required, Validators.minLength(6),Validators.maxLength(20)]] ,
          'password_confirmation'     : ['' , [this.equalto('password')] ]
      });

  }



}
;