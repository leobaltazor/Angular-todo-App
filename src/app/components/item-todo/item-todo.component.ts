import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Todo } from "src/app/store/models/todo.model";

@Component({
  selector: "app-item-todo",
  templateUrl: "./item-todo.component.html",
  styleUrls: ["./item-todo.component.css"]
})
export class ItemTodoComponent implements OnInit {
  @Input()
  todo: Todo;
  todoItem = new FormGroup({
    id: new FormControl(""),
    description: new FormControl(""),
    isChecked: new FormControl("")
  });
  @Output()
  todoStateChange: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.todoItem.setValue(this.todo);
    this.todoItem.valueChanges.subscribe(value => {
      this.onCheckClick(value);
    });
  }
  onDeleteClick(item): void {
    item = { ...item, payload: "DELETE" };
    this.todoStateChange.emit(item);
  }
  onCheckClick(item): void {
    this.todoStateChange.emit(item);
  }
}
