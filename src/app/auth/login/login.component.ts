import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UIService } from '../../ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy{

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private uiService: UIService) { }
  loginForm: FormGroup;
  public validationMessages;
  isLoading = false;
  private loadingSubs: Subscription;

  ngOnInit() {
    this.loadingSubs = this.uiService.loadingStateChanged.subscribe(res => {
      this.isLoading = res;
    });
    this.initializeFormValidationMessages();
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  onSubmit() {
    console.log('submitting => ', this.loginForm.value);
    this.authService.login({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    });
  }

  reset(){
    this.loginForm.reset();
  }

  initializeFormValidationMessages(){
    this.validationMessages = {
      username: [
        { type: 'required', message: 'Username is required' },
        { type: 'minlength', message: 'Username must be at least 5 characters long' },
        { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
        { type: 'pattern', message: 'Your username must contain only numbers and letters' },
        { type: 'validUsername', message: 'Your username has already been taken' }
      ],
      email: [
        { type: 'required', message: 'Email is required' },
        { type: 'pattern', message: 'Enter a valid email' }
      ],
      confirm_password: [
        { type: 'required', message: 'Confirm password is required' },
        { type: 'areEqual', message: 'Password mismatch' }
      ],
      password: [
        { type: 'required', message: 'Password is required' },
        { type: 'minlength', message: 'Password must be at least 5 characters long' },
        { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
      ],
      terms: [
        { type: 'pattern', message: 'You must accept terms and conditions' }
      ]
    };
  }

  ngOnDestroy(){
    if (this.loadingSubs) {
      this.loadingSubs.unsubscribe();
    }
  }

}
