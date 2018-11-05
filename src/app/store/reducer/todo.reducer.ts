import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Todo } from "../models";
import { TodoActionTypes } from "../constants";
import { TodoActions } from "../actions/todo.actions";

export interface State extends EntityState<Todo> {
  // additional entities state properties
}

export const adapterTodo: EntityAdapter<Todo> = createEntityAdapter<Todo>();

export const initialState: State = adapterTodo.getInitialState({
  // additional entity state properties
});

export function reducerTodo(state = initialState, action: TodoActions): State {
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
      return adapterTodo.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds: selectTodoIds,
  selectEntities: selectTodoEntities,
  selectAll: selectTodoAll,
  selectTotal: selectTodoTotal
} = adapterTodo.getSelectors();
