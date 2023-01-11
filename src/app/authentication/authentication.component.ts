import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent implements OnInit {
  loginForm: FormGroup;
  emailError;
  passwordError;
  alertErrorTxt;
  isAlertOpen:boolean;
  emailPattern = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
  constructor(private router: Router) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email,Validators.pattern(this.emailPattern)]),
      password: new FormControl(null, Validators.required),
    });
    if (localStorage.getItem('user')) {
      this.router.navigate(['/listing']);
    }
    
  }
  onSubmit() {
    if (
      this.loginForm.get('email').value == '' ||
      this.loginForm.get('email').value == null
    ) {
      this.emailError = 'Please enter email';
      return false;
    }
    if (
      this.loginForm.get('password').value == '' ||
      this.loginForm.get('password').value == null
    ) {
      this.passwordError = 'Please enter a password';
      return false;
    }
    environment.users.find((user) => {
      if (
        user.email == this.loginForm.get('email').value &&
        user.password == this.loginForm.get('password').value
      ) {
        var store: any = {
          email: user.email,
          password: user.password,
        };
        localStorage.setItem('user', JSON.stringify(store));
        this.router.navigate(['/listing']);
      }else{
        this.isAlertOpen = true
        this.alertErrorTxt = "Email or Password didn't Match with records"
      }
    });
  }

  closeAlert(){
    this.isAlertOpen=false;
  }
}
