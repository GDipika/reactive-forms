import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private formbuilder: FormBuilder) { }

  registrationForm = this.formbuilder.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: [''],
    confirmPassword: [''],
    address: this.formbuilder.group({
      city: [''],
      state: [''],
      postalcode: [''],
    })
  });///to create formgroup we call group method



  // registrationForm=new FormGroup({
  //   username:new FormControl("deepu"),
  //   password:new FormControl(''),
  //   confirmPassword:new FormControl(''),
  //   address:new FormControl(''),
  //   city:new FormControl(''),
  //   state:new FormControl(''),
  //   postalcode:new FormControl('')
  // });
}
