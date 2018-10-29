import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CustomMaterialModule } from "./custom-material";
import { ListtodosComponent } from "./components/listtodos/listtodos.component";
import { HttpClientModule } from "@angular/common/http";
import { InputTodoComponent } from "./components/input-todo/input-todo.component";
import { ItemTodoComponent } from "./components/item-todo/item-todo.component";
import { ReactiveFormsModule } from "@angular/forms";
import { AppTodoComponent } from "./app-todo/app-todo.component";
import { SortTodoComponent } from "./components/sort-todo/sort-todo.component";
import { StoreModule } from "@ngrx/store";
import { todoReducer } from "./store/reducer/todo.reducer";
import { environment } from "src/environments/environment";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

@NgModule({
  declarations: [
    AppComponent,
    ListtodosComponent,
    InputTodoComponent,
    ItemTodoComponent,
    AppTodoComponent,
    SortTodoComponent
  ],
  imports: [
    BrowserModule,
    CustomMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ todo: todoReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
