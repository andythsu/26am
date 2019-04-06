import { Component, Injector } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { PopupService } from "./popup/popup.service";
// import { PopupComponent } from './popup/popup.component';

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { AlertService } from "./alert/alert.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  faHeart = faHeart;

  constructor(
    injector: Injector,
    public popup: PopupService,
    public alertService: AlertService
  ) {
    // Convert `PopupComponent` to a custom element.
    // const PopupElement = createCustomElement(PopupComponent, {injector});
    // Register the custom element with the browser.
    // customElements.define('popup-element', PopupElement);
  }
  raiseAlert($event) {
    const message = $event.message;
    const type = $event.type;
    this.alertService.displayAlert(message, type);
  }
}
