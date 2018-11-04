import { Action } from "@ngrx/store";
import { Update } from "@ngrx/entity";
import { TodoActionTypes } from "../constants/todo.constants";
import { Todo } from "../models/todo.model";

export class LoadTodos implements Action {
  readonly type = TodoActionTypes.LoadTodos;

  constructor(public payload: { todos: Todo[] }) {}
}

export class AddTodo implements Action {
  readonly type = TodoActionTypes.AddTodo;

  constructor(public payload: { todo: Todo }) {}
}

export class UpsertTodo implements Action {
  readonly type = TodoActionTypes.UpsertTodo;

  constructor(public payload: { todo: Todo }) {}
}

export class AddTodos implements Action {
  readonly type = TodoActionTypes.AddTodos;

  constructor(public payload: { todos: Todo[] }) {}
}

export class UpsertTodos implements Action {
  readonly type = TodoActionTypes.UpsertTodos;

  constructor(public payload: { todos: Todo[] }) {}
}

export class UpdateTodo implements Action {
  readonly type = TodoActionTypes.UpdateTodo;

  constructor(public payload: { todo: Update<Todo> }) {}
}

export class UpdateTodos implements Action {
  readonly type = TodoActionTypes.UpdateTodos;

  constructor(public payload: { todos: Update<Todo>[] }) {}
}

export class DeleteTodo implements Action {
  readonly type = TodoActionTypes.DeleteTodo;

  constructor(public payload: { id: string }) {}
}

export class DeleteTodos implements Action {
  readonly type = TodoActionTypes.DeleteTodos;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearTodos implements Action {
  readonly type = TodoActionTypes.ClearTodos;
}

export type TodoActions =
  | LoadTodos
  | AddTodo
  | UpsertTodo
  | AddTodos
  | UpsertTodos
  | UpdateTodo
  | UpdateTodos
  | DeleteTodo
  | DeleteTodos
  | ClearTodos;
