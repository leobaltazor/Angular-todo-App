import { Action } from "@ngrx/store";
import { Todo } from "src/app/todo";
import { todoActionTypes } from "../constants/todo.constants";

export class Load implements Action {
  readonly type = todoActionTypes.LOAD;
  constructor(public payload: Todo[]) {}
}
export class Add implements Action {
  readonly type = todoActionTypes.ADD;
  constructor(public payload: Todo) {}
}

export type TodoActionUnion = Load | Add;
