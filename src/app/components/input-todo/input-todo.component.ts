import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Todo } from "../../todo";
import { debounceTime, filter } from "rxjs/operators";

@Component({
  selector: "app-input-todo",
  templateUrl: "./input-todo.component.html",
  styleUrls: ["./input-todo.component.css"]
})
export class InputTodoComponent implements OnInit {
  todoItem = new FormGroup({
    description: new FormControl("", [Validators.minLength(3), Validators.required]),
    is_checked: new FormControl(false)
  });
  @Output()
  newAddedItem: EventEmitter<Todo> = new EventEmitter();
  constructor() {}

  ngOnInit() {
    this.todoItem.valueChanges.pipe(
      debounceTime(500)
    )
    .subscribe(value => {
      console.log(value);
    });
  }
  onSubmit() {
    this.newAddedItem.emit(this.todoItem.value as Todo);
  }
}
