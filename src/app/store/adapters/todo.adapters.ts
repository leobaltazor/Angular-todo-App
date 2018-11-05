import { EntityAdapter, createEntityAdapter } from "@ngrx/entity";

import { Todo } from "../models";

export const adapterTodo: EntityAdapter<Todo> = createEntityAdapter<Todo>();

const { selectIds, selectEntities, selectAll, selectTotal } = adapterTodo.getSelectors();

export const selectTodoIds = selectIds;

export const selectTodoEntities = selectEntities;

export const selectTodoAll = selectAll;

export const selectTodoTotal = selectTotal;
