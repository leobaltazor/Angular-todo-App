import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CustomMaterialModule } from "./custom-material";
import { ListtodosComponent } from "./components/listtodos/listtodos.component";

@NgModule({
  declarations: [AppComponent, ListtodosComponent],
  imports: [BrowserModule, CustomMaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
