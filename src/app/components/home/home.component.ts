import { Component, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import {
  faFire,
  faEye,
  faBox,
  faStar,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
declare var $: any;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  faFire = faFire;
  faEye = faEye;
  faAngleDoubleRight = faAngleDoubleRight;
  faStar = faStar;

  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit() {
    // this.spinner.show();
    /*------------------
		Background set
	--------------------*/
    $(".set-bg").each(function () {
      var bg = $(this).data("setbg");
      $(this).css("background-image", "url(" + bg + ")");
    });

    // this.spinner.hide();
  }
}
