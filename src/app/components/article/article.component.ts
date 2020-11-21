import { Component, OnInit } from "@angular/core";
import {
  faUser,
  faCalendar,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"],
})
export class ArticleComponent implements OnInit {
  faUser = faUser;
  faCalendar = faCalendar;
  faLocationArrow = faLocationArrow;
  constructor() {}

  ngOnInit() {}
}
