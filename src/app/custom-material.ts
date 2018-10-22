import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatToolbarModule,
  MatGridListModule,
  MatSidenavModule,
  MatInputModule,
  MatListModule,
  MatDividerModule,
  MatCardModule,
  MatMenuModule,
  MatChipsModule
} from "@angular/material";

const MODULES = [
  BrowserAnimationsModule,
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatInputModule,
  MatDividerModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatChipsModule
];
@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})
export class CustomMaterialModule {}
