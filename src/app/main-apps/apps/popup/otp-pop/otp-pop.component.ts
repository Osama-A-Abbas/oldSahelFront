import { ImpApiService } from 'src/app/services/imp-api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/service/order.service';
import { auth } from 'src/app/constant/Routes';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-otp-pop',
  templateUrl: './otp-pop.component.html',
  styleUrls: ['./otp-pop.component.scss']
})
export class OtpPopComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<OtpPopComponent>,
    private service: OrderService,
    private router: Router,
    private impApiService: ImpApiService,
    private spinner: NgxSpinnerService
  ) { }

  @ViewChild("ngOtpInput") ngOtpInput: any;
  currentUser = JSON.parse(localStorage.getItem("currentUser"));

  otpCheck() {
    this.spinner.show()
    const payload = {
      email_user: this.currentUser.user_info.email_user,
      otp_entered: this.ngOtpInput.currentVal
    };

    console.log(payload)

    this.impApiService.post(auth.verifyOtp, payload).subscribe(data => {
      localStorage.setItem('token', data.access_token)
      if (this.currentUser.user_info.user_type_id == 1) {
        this.router.navigate(["/apps/home/app-customer-home"])
        this.spinner.hide()

        this.dialogRef.close();
      }
      if (this.currentUser.user_info.user_type_id == 2) {
        this.router.navigate(["/apps/home/app-collector-home"])
        this.spinner.hide()

        this.dialogRef.close();

      }
      if (this.currentUser.user_info.user_type_id == 3) {
        this.router.navigate(["/apps/home/app-store-home"])
        this.spinner.hide()

        this.dialogRef.close();

      }
      if (this.currentUser.user_info.user_type_id == 4) {
        this.router.navigate(["/apps/home/app-admin-home"])
        this.spinner.hide()

        this.dialogRef.close();

      }


    })


  }



  ngOnInit(): void {
    console.log(this.currentUser)
  }

}

