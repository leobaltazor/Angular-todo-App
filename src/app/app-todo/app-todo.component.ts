import { Component, OnInit } from "@angular/core";
import { ServiceService } from "../service.service";
import { Store, select } from "@ngrx/store";
import * as selectorsTodo from "../store/selectors/todo.selectors";
import { Folder, Todo } from "../store/models";
import * as fromFoldersActions from "../store/actions/folder.actions";
import * as fromTodosActions from "../store/actions/todo.actions";
import { State } from "../store/reducer";
import { selectFolderAll } from "../store/selectors/folder.selectors";

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
  folders: Folder[] = [];

  constructor(
    private serviceService: ServiceService,
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
    this.serviceService.deleteTodo("todos", +item.id).subscribe(_ => {
      const { id } = item;
      this.store.dispatch(new fromTodosActions.DeleteTodo({ id }));
    });
  }

  onCheck(itemId, payload): void {
    this.serviceService
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
    this.store.pipe(select(selectFolderAll)).subscribe((value: Folder[]) => {
      this.folders = value;
    });
    this.getFolder();
    this.getTodo();
  }

  getFolder(): void {
    this.serviceService
      .get("folders")
      .subscribe((folders: Folder[]) => {
        this.store.dispatch(new fromFoldersActions.LoadFolders({ folders }));
      });
  }

  getTodo(): void {
    this.serviceService.get("todos").subscribe((todos: Todo[]) => {
      this.store.dispatch(new fromTodosActions.LoadTodos({ todos }));
    });
  }
}
