import { Component, OnInit } from "@angular/core";
import {
  faMapMarker,
  faPhone,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  faMapMarker = faMapMarker;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faGlobe = faGlobe;
  constructor() {}

  ngOnInit() {}
}
