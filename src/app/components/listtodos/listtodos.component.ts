import { Component, OnInit } from "@angular/core";
import { Todo } from "src/app/todo";
import { ServiceTodoService } from "../../service-todo.service";

@Component({
  selector: "app-listtodos",
  templateUrl: "./listtodos.component.html",
  styleUrls: ["./listtodos.component.css"]
})
export class ListtodosComponent implements OnInit {
  todos: Todo[];
  constructor(private serviceTodoService: ServiceTodoService) {}

  ngOnInit() {
    this.serviceTodoService
      .getTodo("todos")
      .subscribe((res: Todo[]) => (this.todos = res));
  }
}
