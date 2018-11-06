import { createSelector, createFeatureSelector } from "@ngrx/store";
import * as folderReducer from "../reducer/folder.reducer";

export const selectTodoState = createFeatureSelector<folderReducer.FolderState>(
  "folders"
);
export const getSelectedFolderId = (state: folderReducer.FolderState) => state.selectedFolderId;

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
export const selectCurrentFolderId = createSelector(
  selectTodoState,
  getSelectedFolderId
);

export const selectCurrentFolder = createSelector(
  selectTodoState,
  getSelectedFolderId,
  (entities, id) => entities[id]
);
