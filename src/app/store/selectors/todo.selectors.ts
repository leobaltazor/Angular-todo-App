import { createFeatureSelector } from "@ngrx/store";
import { adapter, State } from "../reducer/todo.reducer";

export const selectTodos = createFeatureSelector<State>("todos");

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors(selectTodos);
