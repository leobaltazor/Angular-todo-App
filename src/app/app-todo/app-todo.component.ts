import { Component, OnInit } from "@angular/core";
import { ServiceTodoService } from "../service-todo.service";
import { Store, select } from "@ngrx/store";
import { TodoList } from "../store/models/todo-list.intarface";
import { TodoActionTypes } from "../store/constants/todo.constants";
import { AppStore } from "../store/models/app-store.interface";
import * as selectorsTodo from "../store/selectors/todo.selectors";
import { Todo } from "../store/models/todo.model";
import TodoActions from "../store/actions";

@Component({
  selector: "app-todo",
  templateUrl: "./app-todo.component.html",
  styleUrls: ["./app-todo.component.css"]
})
export class AppTodoComponent implements OnInit {
  todos: Todo[] = [];
  selectedTodo: Todo[];
  newAddedItem: Todo;
  initialTodo: Todo[];
  lengthTodos = 0;

  constructor(
    private serviceTodoService: ServiceTodoService,
    private store: Store<Todo>
  ) {}

  onFilter(filter): void {
    switch (filter) {
      case "DONE":
        this.todos = this.initialTodo.filter((e, i, a) => {
          return e.isChecked === true;
        });
        break;
      case "ACTIVE":
        this.todos = this.initialTodo.filter((e, i, a) => {
          return e.isChecked === false;
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
    this.serviceTodoService.deleteTodo("todos", +item.id).subscribe(res => {
      this.store.dispatch(new TodoActions.DeleteTodo({ id: item.id }));
    });
  }

  onCheck(itemId, payload): void {
    this.serviceTodoService
      .doneTodo("todos", itemId, payload)
      .subscribe(res => {
        this.store.dispatch(new TodoActions.UpsertTodo({ todo: res }));
      });
  }

  ngOnInit() {
    this.store
      .pipe(select(selectorsTodo.selectAllTodos))
      .subscribe((value: Todo[]) => {
        this.todos = value;
        this.initialTodo = value;
      });
    this.getTodo();
  }

  getTodo(): void {
    this.serviceTodoService.getTodo("todos").subscribe((res: Todo[]) => {
      this.store.dispatch(new TodoActions.LoadTodos({ todos: res }));
    });
  }
}
