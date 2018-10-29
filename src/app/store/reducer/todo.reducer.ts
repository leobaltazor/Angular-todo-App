import { TodoList } from "../models/todo-list.intarface";
import { TodoActionUnion } from "../actions/todo.actions";
import { todoActionTypes } from "../constants/todo.constants";

const initialState: TodoList = {
  todoList: []
};

export function todoReducer(
  state: TodoList = initialState,
  action: TodoActionUnion
) {
  switch (action.type) {
    case todoActionTypes.LOAD:
      return {
        ...state,
        todoList: action.payload
      };

    case todoActionTypes.ADD:
      return {
        ...state,
        todoList: [...state.todoList, action.payload]
      };

    default:
      return state;
  }
}
