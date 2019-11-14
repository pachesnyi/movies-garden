import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { WarningModule } from "./warning/warning.module";
import { SuccessModule } from "./success/success.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, WarningModule, SuccessModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
