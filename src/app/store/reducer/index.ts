import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from "@ngrx/store";
import { environment } from "../../../environments/environment";

import * as fromFolder from "./folder.reducer";
import * as fromTodo from "./todo.reducer";

export interface State {
  todos: fromTodo.State;
  folder: fromFolder.State;
  selectedTodo: number | null;
  selectedFolder: number | null;
}

export const reducers: ActionReducerMap<State> = {
  todos: fromTodo.reducerTodo,
  folder: fromFolder.reducerFolder,
  selectedTodo: null,
  selectedFolder: null
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
