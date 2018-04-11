import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-ads',
  templateUrl: './add-ads.component.html',
  styleUrls: ['./add-ads.component.css']
})
export class AddAdsComponent implements OnInit {
    isLinear = false;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    user_ads = {
      name : "",
      last_name:"",
      pre_phone:"",
      phone_number:"",
      url:""
    }
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}
