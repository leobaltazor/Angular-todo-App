import { Component, OnInit } from "@angular/core";
import { ServiceTodoService } from "../service-todo.service";
import { Store, select } from "@ngrx/store";
import * as selectorsTodo from "../store/selectors/todo.selectors";
import { Todo } from "../store/models";
import * as fromTodosActions from "../store/actions/todo.actions";
import { State } from "../store/reducer";

@Component({
  selector: "app-todo",
  templateUrl: "./app-todo.component.html",
  styleUrls: ["./app-todo.component.css"]
})
export class AppTodoComponent implements OnInit {
  todos: Todo[] = [];
  newAddedItem: Todo;
  initialTodo: Todo[];
  lengthTodos = 0;

  constructor(
    private serviceTodoService: ServiceTodoService,
    private store: Store<State>
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
    this.serviceTodoService.deleteTodo("todos", +item.id).subscribe(_ => {
      const { id } = item;
      this.store.dispatch(new fromTodosActions.DeleteTodo({ id }));
    });
  }

  onCheck(itemId, payload): void {
    this.serviceTodoService
      .doneTodo("todos", itemId, payload)
      .subscribe(todo => {
        this.store.dispatch(new fromTodosActions.UpsertTodo({ todo }));
      });
  }

  ngOnInit() {
    this.store
      .pipe(select(selectorsTodo.selectTodoAll))
      .subscribe((value: Todo[]) => {
        this.todos = value;
        this.initialTodo = value;
      });
    this.getTodo();
  }

  getTodo(): void {
    this.serviceTodoService.getTodo("todos").subscribe((todos: Todo[]) => {
      this.store.dispatch(new fromTodosActions.LoadTodos({ todos }));
    });
  }
}
