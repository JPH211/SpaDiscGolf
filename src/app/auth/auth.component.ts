import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthService } from '../shared/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  form: FormGroup;
  error?: string;

  constructor(private authService: AuthService) {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      pass: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {}

  onLogin() {
    this.authService
      .login(this.form.value.email, this.form.value.pass)
      .subscribe((res) => console.log(res), (e)=> this.error = e.error.error.message);
  }

  onSignUp() {
    this.authService
      .signUp(this.form.value.email, this.form.value.pass)
      .subscribe((res) => console.log(res), (e)=> this.error = e.error.error.message);
  }
}
