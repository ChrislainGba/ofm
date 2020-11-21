import { Component, OnInit } from "@angular/core";
import {
  faFile,
  faHeadphones,
  faFileDownload,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
declare var $: any;

@Component({
  selector: "app-homelie",
  templateUrl: "./homelie.component.html",
  styleUrls: ["./homelie.component.css"],
})
export class HomelieComponent implements OnInit {
  faFile = faFile;
  faHeadphones = faHeadphones;
  faFileDownload = faFileDownload;
  faAngleDoubleRight = faAngleDoubleRight;

  constructor() {}

  ngOnInit() {
    $(".set-bg").each(function () {
      var bg = $(this).data("setbg");
      $(this).css("background-image", "url(" + bg + ")");
    });
  }
}
