import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Todo } from "src/app/store/models/todo.model";

@Component({
  selector: "app-listtodos",
  templateUrl: "./listtodos.component.html",
  styleUrls: ["./listtodos.component.css"]
})
export class ListtodosComponent implements OnInit {
  @Input()
  todos: Todo[];
  @Output()
  todoStateChange: EventEmitter<Todo> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onTodoStateChange(e) {
    this.todoStateChange.emit(e);
  }
}
