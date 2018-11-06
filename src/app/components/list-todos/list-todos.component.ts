import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Todo } from "../../store/models";

@Component({
  selector: "app-list-todos",
  templateUrl: "./list-todos.component.html",
  styleUrls: ["./list-todos.component.css"]
})
export class ListTodosComponent implements OnInit {
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
