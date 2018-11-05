import { Action } from "@ngrx/store";
import { Update } from "@ngrx/entity";
import { Folder } from "../models/folder.model";

export enum FolderActionTypes {
  LoadFolders = "[Folder] Load Folders",
  AddFolder = "[Folder] Add Folder",
  UpsertFolder = "[Folder] Upsert Folder",
  AddFolders = "[Folder] Add Folders",
  UpsertFolders = "[Folder] Upsert Folders",
  UpdateFolder = "[Folder] Update Folder",
  UpdateFolders = "[Folder] Update Folders",
  DeleteFolder = "[Folder] Delete Folder",
  DeleteFolders = "[Folder] Delete Folders",
  ClearFolders = "[Folder] Clear Folders"
}

export class LoadFolders implements Action {
  readonly type = FolderActionTypes.LoadFolders;

  constructor(public payload: { folders: Folder[] }) {}
}

export class AddFolder implements Action {
  readonly type = FolderActionTypes.AddFolder;

  constructor(public payload: { folder: Folder }) {}
}

export class UpsertFolder implements Action {
  readonly type = FolderActionTypes.UpsertFolder;

  constructor(public payload: { folder: Folder }) {}
}

export class AddFolders implements Action {
  readonly type = FolderActionTypes.AddFolders;

  constructor(public payload: { folders: Folder[] }) {}
}

export class UpsertFolders implements Action {
  readonly type = FolderActionTypes.UpsertFolders;

  constructor(public payload: { folders: Folder[] }) {}
}

export class UpdateFolder implements Action {
  readonly type = FolderActionTypes.UpdateFolder;

  constructor(public payload: { folder: Update<Folder> }) {}
}

export class UpdateFolders implements Action {
  readonly type = FolderActionTypes.UpdateFolders;

  constructor(public payload: { folders: Update<Folder>[] }) {}
}

export class DeleteFolder implements Action {
  readonly type = FolderActionTypes.DeleteFolder;

  constructor(public payload: { id: string }) {}
}

export class DeleteFolders implements Action {
  readonly type = FolderActionTypes.DeleteFolders;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearFolders implements Action {
  readonly type = FolderActionTypes.ClearFolders;
}

export type FolderActions =
  | LoadFolders
  | AddFolder
  | UpsertFolder
  | AddFolders
  | UpsertFolders
  | UpdateFolder
  | UpdateFolders
  | DeleteFolder
  | DeleteFolders
  | ClearFolders;
