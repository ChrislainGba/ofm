import { Component, OnInit } from "@angular/core";
import {
  faFacebook,
  faGoogle,
  faTwitter,
  faInstagram,
  faYahoo,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent implements OnInit {
  faGoogle = faGoogle;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faYahoo = faYahoo;
  faYoutube = faYoutube;
  constructor() {}

  ngOnInit() {}
}
