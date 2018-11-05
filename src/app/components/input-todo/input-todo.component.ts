import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { debounceTime} from "rxjs/operators";
import { Store } from "@ngrx/store";
import { TodoList } from "src/app/store/models/todo-list.intarface";
import { ServiceTodoService } from "../../service-todo.service";
import { Todo } from "src/app/store/models/todo.model";
import { AddTodo } from "src/app/store/actions/todo.actions";

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
    isChecked: new FormControl(false)
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
          this.store.dispatch( new AddTodo({todo: value}));
        });
        this.todoItem.reset({isChecked: false});
    }
  }
}
