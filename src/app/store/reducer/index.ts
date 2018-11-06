import {
  ActionReducerMap,
  MetaReducer
} from "@ngrx/store";
import { environment } from "../../../environments/environment";

import * as fromFolder from "./folder.reducer";
import * as fromTodo from "./todo.reducer";

export interface State {
  todos: fromTodo.TodoState;
  folders: fromFolder.FolderState;
  selectedTodo: number | null;
  selectedFolder: number | null;
}

export const reducers: ActionReducerMap<State> = {
  todos: fromTodo.reducerTodo,
  folders: fromFolder.reducerFolder,
  selectedTodo: null,
  selectedFolder: null
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
