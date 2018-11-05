import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "../reducer/todo.reducer";
import adapterTodo from "../adapters";

export const selectTodosState = createFeatureSelector<State>("todos");

export const getSelectedTodo = (state: State) => state.selectedTodo;

export const selectTodoIds = createSelector(
  selectTodosState,
  adapterTodo.selectTodoIds
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
