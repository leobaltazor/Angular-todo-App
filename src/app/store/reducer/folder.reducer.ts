import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Folder } from "../models/folder.model";
import { FolderActions } from "../actions/folder.actions";
import { FolderActionTypes } from "../constants";

export interface FolderState extends EntityState<Folder> {
  // additional entities state properties
  selectedFolderId: number | null;
}

export const adapterFolder: EntityAdapter<Folder> = createEntityAdapter<Folder>();

export const initialState: FolderState = adapterFolder.getInitialState({
  // additional entity state properties
  selectedFolderId: null
});

export function reducerFolder(
  state = initialState,
  action: FolderActions
): FolderState {
  switch (action.type) {
    case FolderActionTypes.AddFolder: {
      return adapterFolder.addOne(action.payload.folder, state);
    }

    case FolderActionTypes.UpsertFolder: {
      return adapterFolder.upsertOne(action.payload.folder, state);
    }

    case FolderActionTypes.AddFolders: {
      return adapterFolder.addMany(action.payload.folders, state);
    }

    case FolderActionTypes.UpsertFolders: {
      return adapterFolder.upsertMany(action.payload.folders, state);
    }

    case FolderActionTypes.UpdateFolder: {
      return adapterFolder.updateOne(action.payload.folder, state);
    }

    case FolderActionTypes.UpdateFolders: {
      return adapterFolder.updateMany(action.payload.folders, state);
    }

    case FolderActionTypes.DeleteFolder: {
      return adapterFolder.removeOne(action.payload.id, state);
    }

    case FolderActionTypes.DeleteFolders: {
      return adapterFolder.removeMany(action.payload.ids, state);
    }

    case FolderActionTypes.LoadFolders: {
      return adapterFolder.addAll(action.payload.folders, state);
    }

    case FolderActionTypes.ClearFolders: {
      return adapterFolder.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds: selectFolderIds,
  selectEntities: selectFolderEntities,
  selectAll: selectFolderAll,
  selectTotal: selectFolderTotal,
} = adapterFolder.getSelectors();
