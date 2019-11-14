import { Component } from "@angular/core";

@Component({
  selector: "app-warning",
  template: '<div class="warning"><h1>{{title}}</h1></div>',
  styles: [
    ".warning { padding: 15px 20px; color: #721c24; background-color: #f8d7da; border-color: #f8d7da; border-radius: 4px; margin-top: 15px; }"
  ]
})
export class WarningComponent {
  title: string = "Error! Please, try again!";
}
