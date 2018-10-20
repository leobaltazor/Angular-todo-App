import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule, MatCheckboxModule } from "@angular/material";

const MODULES = [BrowserAnimationsModule, MatButtonModule, MatCheckboxModule];
@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})
export class CustomMaterialModule {}
