import {
  createSelector,
  createFeatureSelector,
} from "@ngrx/store";
import * as todoReducer from "../reducer/todo.reducer";

export interface State {
  todos: todoReducer.State;
}

export const selectTodoState = createFeatureSelector<todoReducer.State>("todos");

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
// export const getSelectedTodoId = createSelector(
//   selectTodoState,
//   todoReducer.getSelectedTodoId
// );

// export const selectCurrentTodo = createSelector(
//   selectTodoState,
//   getSelectedTodoId,
//   (entities, id) => entities[id]
// );
