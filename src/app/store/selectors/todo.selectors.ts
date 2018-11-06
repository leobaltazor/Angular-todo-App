import {
  createSelector,
  createFeatureSelector,
} from "@ngrx/store";
import * as todoReducer from "../reducer/todo.reducer";

export const selectTodoState = createFeatureSelector<todoReducer.TodoState>("todos");

export const getSelectedTodoId = (state: todoReducer.TodoState) => state.selectedTodoId;

export const selectTodoIds = createSelector(
  selectTodoState,
  todoReducer.selectTodoIds
);
export const selectTodoEntities = createSelector(
  selectTodoState,
  todoReducer.selectTodoEntities
);
export const selectTodoAll = createSelector(
  selectTodoState,
  todoReducer.selectTodoAll
);
export const selectTodoTotal = createSelector(
  selectTodoState,
  todoReducer.selectTodoTotal
);
export const selectCurrentTodoId  = createSelector(
  selectTodoState,
  getSelectedTodoId
);

export const selectCurrentTodo = createSelector(
  selectTodoState,
  selectCurrentTodoId,
  (entities, id) => entities[id]
);
