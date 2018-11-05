import { createFeatureSelector, createSelector } from "@ngrx/store";
import { adapterTodo } from "../reducer/todo.reducer";
import { State } from "../reducer";
import * as fromTodo from "../reducer/todo.reducer";
import { Todo } from "../models";

export const selectTodosState = createFeatureSelector<State, Todo>("todos");

export const getSelectedTodo = (state: State) => state.selectedTodo;

export const selectTodoIds = createSelector(
  selectTodosState,
  fromTodo.selectTodoIds
);
export const selectTodoEntities = createSelector(
  selectTodosState,
  adapterTodo.selectTodoEntities
);
export const selectAllTodos = createSelector(
  selectTodosState,
  adapterTodo.selectTodoAll
);
export const selectTodoTotal = createSelector(
  selectTodosState,
  adapterTodo.selectTodoTotal
);
export const selectCurrentTodoId = createSelector(
  selectTodosState,
  getSelectedTodo
);
export const selectCurrentUser = createSelector(
  adapterTodo.selectTodoEntities,
  selectCurrentTodoId,
  (todoEntities, todoId) => todoEntities[todoId]
);
