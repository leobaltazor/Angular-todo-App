import { Component, Input, OnInit } from "@angular/core";
import { Folder } from "../../store/models";

@Component({
  selector: "app-list-folder",
  templateUrl: "./list-folder.component.html",
  styleUrls: ["./list-folder.component.css"]
})
export class ListFolderComponent implements OnInit {
  @Input()
  folders: Folder[];
  constructor() {}

  ngOnInit() {}
}
