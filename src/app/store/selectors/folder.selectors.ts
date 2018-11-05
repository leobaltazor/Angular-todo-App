import {
  createSelector,
  createFeatureSelector,
} from "@ngrx/store";
import * as folderReducer from "../reducer/folder.reducer";

export interface State {
  folders: folderReducer.State;
}

export const selectTodoState = createFeatureSelector<folderReducer.State>("folders");

export const selectFolderIds = createSelector(
  selectTodoState,
  folderReducer.selectFolderIds
);
export const selectFolderEntities = createSelector(
  selectTodoState,
  folderReducer.selectFolderEntities
);
export const selectFolderAll = createSelector(
  selectTodoState,
  folderReducer.selectFolderAll
);
export const selectFolderTotal = createSelector(
  selectTodoState,
  folderReducer.selectFolderTotal
);
// export const getSelectedFolderId = createSelector(
//   selectTodoState,
//   folderReducer.getSelectedFolderId
// );

// export const selectCurrentFolder = createSelector(
//   selectTodoState,
//   getSelectedFolderId,
//   (entities, id) => entities[id]
// );
