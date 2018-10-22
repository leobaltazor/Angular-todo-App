import { Component, OnInit } from "@angular/core";
import { Todo } from "../todo";
import { ServiceTodoService } from "../service-todo.service";

@Component({
  selector: "app-todo",
  templateUrl: "./app-todo.component.html",
  styleUrls: ["./app-todo.component.css"]
})
export class AppTodoComponent implements OnInit {
  todos: Todo[];
  selectedTodo: Todo[];
  newAddedItem;
  initialTodo: Todo[];
  lengthTodos = 0;

  constructor(private serviceTodoService: ServiceTodoService) {}

  onFilter(filter): void {
    switch (filter) {
      case "DONE":
        this.todos = this.initialTodo.filter((e, i, a) => {
          return e.is_checked === true;
        });
        break;
      case "ACTIVE":
        this.todos = this.initialTodo.filter((e, i, a) => {
          return e.is_checked === false;
        });
        break;
      default:
        this.todos = this.initialTodo;
        break;
    }
  }

  onTodoStateChange(e): void {
    const { payload, ...todo } = e;
    switch (payload) {
      case "DELETE":
        this.onDelete(todo);
        break;
      default:
        this.onCheck(e.id, todo);
        break;
    }
  }

  onDelete(item: Todo): void {
    this.serviceTodoService.deleteTodo("todos", item.id).subscribe(res => {
      this.todos = this.todos.filter(h => h.id !== item.id);
      this.initialTodo = this.initialTodo.filter(h => h.id !== item.id);
      console.log("Deleted", item);
    });
  }

  onCheck(itemId, payload): void {
    this.serviceTodoService
      .doneTodo("todos", itemId, payload)
      .subscribe(res => {
        console.log(res);
        this.initialTodo = this.initialTodo.map((e, i, a) => {
          return e.id === res.id ? res : e;
        });
      });
  }

  onNewAddedItem(e) {
    this.serviceTodoService.addTodo("todos", e as Todo).subscribe(res => {
      this.todos.push(res);
    });
  }

  ngOnInit() {
    this.serviceTodoService.getTodo("todos").subscribe((res: Todo[]) => {
      this.initialTodo = res;
      this.todos = res;
    });
  }
  onSubmit(): void {}
}
