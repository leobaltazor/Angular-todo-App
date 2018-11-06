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
  MatDividerModule,
  MatCardModule,
  MatMenuModule,
  MatChipsModule,
  MatSelectModule
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
  MatChipsModule,
  MatSelectModule
];
@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})
export class CustomMaterialModule {}
