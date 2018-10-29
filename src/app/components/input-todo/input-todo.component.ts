import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Todo } from "../../todo";
import { debounceTime, filter } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { TodoList } from "src/app/store/models/todo-list.intarface";
import { ServiceTodoService } from "../../service-todo.service";
import { todoActionTypes } from "src/app/store/constants/todo.constants";

@Component({
  selector: "app-input-todo",
  templateUrl: "./input-todo.component.html",
  styleUrls: ["./input-todo.component.css"]
})
export class InputTodoComponent implements OnInit {
  todoItem = new FormGroup({
    description: new FormControl("", [
      Validators.minLength(3),
      Validators.required
    ]),
    is_checked: new FormControl(false)
  });
  constructor(
    private store: Store<TodoList>,
    private serviceTodoService: ServiceTodoService
  ) {}

  ngOnInit() {
    this.todoItem.valueChanges.pipe(debounceTime(500)).subscribe(value => {
      // console.log(value);
    });
  }
  onSubmit() {
    if (this.todoItem.valid) {
      this.serviceTodoService
        .addTodo("todos", this.todoItem.value as Todo)
        .subscribe((value: Todo) => {
          this.store.dispatch({
            type: todoActionTypes.ADD,
            payload: value
          });
        });
        this.todoItem.reset();
    }
  }
}
