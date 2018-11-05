import { EntityState } from "@ngrx/entity";
import { Todo } from "../models";
import { TodoActionTypes } from "../constants";
import { TodoActions } from "../actions/todo.actions";
import { adapterTodo } from "../adapters";

export interface State extends EntityState<Todo> {
  // additional entities state properties
  selectedTodo: number | null;
  selectedFolder: number | null;
}

export const initialState: State = adapterTodo.getInitialState({
  selectedTodo: null,
  selectedFolder: null
});

export function reducer(state = initialState, action: TodoActions): State {
  switch (action.type) {
    case TodoActionTypes.AddTodo: {
      return adapterTodo.addOne(action.payload.todo, state);
    }

    case TodoActionTypes.UpsertTodo: {
      return adapterTodo.upsertOne(action.payload.todo, state);
    }

    case TodoActionTypes.AddTodos: {
      return adapterTodo.addMany(action.payload.todos, state);
    }

    case TodoActionTypes.UpsertTodos: {
      return adapterTodo.upsertMany(action.payload.todos, state);
    }

    case TodoActionTypes.UpdateTodo: {
      return adapterTodo.updateOne(action.payload.todo, state);
    }

    case TodoActionTypes.UpdateTodos: {
      return adapterTodo.updateMany(action.payload.todos, state);
    }

    case TodoActionTypes.DeleteTodo: {
      return adapterTodo.removeOne(action.payload.id, state);
    }

    case TodoActionTypes.DeleteTodos: {
      return adapterTodo.removeMany(action.payload.ids, state);
    }

    case TodoActionTypes.LoadTodos: {
      return adapterTodo.addAll(action.payload.todos, state);
    }

    case TodoActionTypes.ClearTodos: {
      return adapterTodo.removeAll({
        ...state,
        selectedTodo: null,
        selectedFolder: null
      });
    }

    default: {
      return state;
    }
  }
}
