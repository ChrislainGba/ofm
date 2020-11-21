import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  public credential = { username: "", password: "" };
  username: string = "";
  password: string = "";
  errorLoginMessage: number = 0;
  hide: boolean;
  staticAlertClosed = true;

  constructor(private router: Router, private spinner: NgxSpinnerService) {}

  ngOnInit() {}

  login() {
    // console.log(this.credential);
    // this.spinner.show();
    // this.loginService.login(this.credential).subscribe(resp => {
    //   let jwtToken = resp.headers.get('Authorization');
    //   console.log("OK");
    //   console.log(resp);
    //   this.spinner.hide();
    //   this.loginService.saveToken(jwtToken);
    //   this.router.navigateByUrl("home");
    // },err => {
    //   this.spinner.hide();
    //   console.log("no token");
    //   this.errorLoginMessage = 1;
    //   setTimeout(() => this.staticAlertClosed = false, 2000);
    //   console.log(err);
    // });
  }
}
