import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
declare var $: any;
@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"],
})
export class NavComponent implements OnInit {
  public isCollapsed = true;
  username = "";

  constructor(private router: Router) {}

  ngOnInit() {
    // $("#navbarDropdown").mouseenter(function () {
    //   $(".dropdown-menu").slideToggle(300, "linear");
    // });
    // $(".dropdown-menu").mouseleave(function () {
    //   $(this).slideToggle(300, "linear");
    // });
  }

  openSide() {
    // document.getElementById("mySidepanel").style.width = "100%";
    // document.getElementById("navTrigger").style.display = "none";
    // document.getElementById("navTriggerClose").style.display = "block";

    $(".navTrigger").toggleClass("active");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").animate({ left: 200, opacity: "show" }, 1500);
  }

  closeSide() {
    document.getElementById("mySidepanel").style.width = "0";
    document.getElementById("navTrigger").style.display = "block";
    document.getElementById("navTriggerClose").style.display = "none";
  }

  gotoLogin() {
    this.router.navigate(["/login"]);
    //this.router.navigateByUrl('login');
  }
}
