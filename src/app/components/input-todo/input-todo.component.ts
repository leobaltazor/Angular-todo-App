import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Todo } from "../../todo";

@Component({
  selector: "app-input-todo",
  templateUrl: "./input-todo.component.html",
  styleUrls: ["./input-todo.component.css"]
})
export class InputTodoComponent implements OnInit {
  todoItem = new FormGroup({
    description: new FormControl(""),
    is_checked: new FormControl(false)
  });
  @Output()
  newAddedItem: EventEmitter<Todo> = new EventEmitter();
  constructor() {}

  ngOnInit() {
    // this.todoItem.valueChanges.subscribe(value => {
    //   this.newAddedItem = value;
    // });
  }
  onSubmit() {
    this.newAddedItem.emit(this.todoItem.value as Todo);
  }
}
