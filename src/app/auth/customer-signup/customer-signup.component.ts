import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from 'src/app/service/order.service';
import { ImpApiService } from 'src/app/services/imp-api.service';
import { auth } from 'src/app/constant/Routes';
import { MatDialog } from '@angular/material/dialog';
import { OtpPopComponent } from 'src/app/main-apps/apps/popup/otp-pop/otp-pop.component';
import { Otp2PopComponent } from 'src/app/main-apps/apps/popup/otp2-pop/otp2-pop.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer-signup',
  templateUrl: './customer-signup.component.html',
  styleUrls: ['./customer-signup.component.scss']
})
export class CustomerSignupComponent implements OnInit {

  submit = "انشاء حساب";
  link = "/apps/home/app-customer-home";

  constructor(
    private router: Router,
    private service: OrderService,
    private formBuilder: FormBuilder,
    private impApiService: ImpApiService,
    private spinner: NgxSpinnerService,
    private dialog: MatDialog,
    private toastr: ToastrService,

  ) { }
  navigateToAccountType() {
    this.router.navigate(['/auth/login']);
  }



  formData: FormGroup;
  submitted_crearte = false;

  signUp() {
    this.spinner.show()

    this.submitted_crearte = true
    if (this.formData.invalid) {
      this.spinner.hide()
      return null;
    }
    const formValue = this.formData.value;

    this.impApiService.post(auth.register, this.formData.value).subscribe(data => {
      if (data.message == "Account successfully created") {
        localStorage.setItem('header', '1')
        localStorage.setItem('email', formValue.email_user)
        this.spinner.hide()
        this.dialog.open(Otp2PopComponent);
      }
      else if (data.message == "The email user has already been taken.") {
        this.toastr.error("البريد الالكتروني موجود مسبقا ");

      }

    });

  }

  ngOnInit(): void {

    this.formData = this.formBuilder.group({
      name_user: ['', [
        Validators.required
      ]],
      email_user: ['', [
        Validators.required,
        Validators.email
      ]],
      password_user: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}')
      ]],
      phone_user: ['', [
        Validators.required,
        Validators.pattern('^05[0-9]{8}$')
      ]],
      user_type_id: [1]
    });

  }

}
