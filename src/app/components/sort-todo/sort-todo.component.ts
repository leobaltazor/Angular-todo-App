import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Todo } from "../../store/models";

@Component({
  selector: "app-sort-todo",
  templateUrl: "./sort-todo.component.html",
  styleUrls: ["./sort-todo.component.scss"]
})
export class SortTodoComponent implements OnInit {
  @Output()
  _filter: EventEmitter<Todo> = new EventEmitter();
  @Input()
  length;
  constructor() {}

  ngOnInit() {}

  onClick(sort): void {
    this._filter.emit(sort);
  }
}
