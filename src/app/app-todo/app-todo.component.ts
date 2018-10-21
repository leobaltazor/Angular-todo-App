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

  constructor(private serviceTodoService: ServiceTodoService) {}

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
    console.log(payload);
  }

  onDelete(item: Todo): void {
    this.serviceTodoService.deleteTodo("todos", item.id).subscribe(res => {
      this.todos = this.todos.filter(h => h.id !== item.id);
      console.log("Deleted", item);
    });
  }

  onCheck(itemId, payload): void {
    this.serviceTodoService
      .doneTodo("todos", itemId, payload)
      .subscribe(res => console.log(res));
  }

  onNewAddedItem(e) {
    this.serviceTodoService.addTodo("todos", e as Todo).subscribe(res => {
      this.todos.push(res);
    });
  }

  ngOnInit() {
    this.serviceTodoService
      .getTodo("todos")
      .subscribe((res: Todo[]) => (this.todos = res));
  }
  onSubmit(): void {}
}
