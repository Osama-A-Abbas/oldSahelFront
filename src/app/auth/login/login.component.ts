import { ImpApiService } from './../../services/imp-api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { auth } from 'src/app/constant/Routes';
import { OtpPopComponent } from 'src/app/main-apps/apps/popup/otp-pop/otp-pop.component';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submit = "تسجيل الدخول";
  link = "home";
  formData = null
  submitted_crearte = false


  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private impApiService: ImpApiService,
    private dialog: MatDialog,
    private service: OrderService
  ) { }

  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      email_user: ['', [
        Validators.required,
        Validators.email
      ]],
      password_user: ['', [
        Validators.required,

        Validators.minLength(8),
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}')
      ]],
    });
  }

  navigateToAccountType() {
    this.router.navigate(['/auth/accountType']);
  }

  login() {

    this.submitted_crearte = true
    if (this.formData.invalid) {
      return null;
    }

    this.impApiService.post(auth.login, this.formData.value).subscribe(data => {
      localStorage.setItem('header', data.user_info.user_type_id)

      localStorage.setItem('currentUser', JSON.stringify(data))
      //localStorage.setItem('token', data.access_token)

      this.dialog.open(OtpPopComponent)

      /*
      if (data.user_info.user_type_id == 1) {
        this.router.navigate(["/apps/home/app-customer-home"])
      }
      if (data.user_info.user_type_id == 2) {
        this.router.navigate(["/apps/home/app-customer-home"])
      }
      if (data.user_info.user_type_id == 3) {
        this.router.navigate(["/apps/home/app-customer-home"])
      }
      if (data.user_info.user_type_id == 4) {
        this.router.navigate(["/apps/home/app-customer-home"])
      }*/

      //this.service.setOtp(data.OTP)


    })


  }

}
