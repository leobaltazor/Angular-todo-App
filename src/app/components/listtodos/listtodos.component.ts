import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-listtodos",
  templateUrl: "./listtodos.component.html",
  styleUrls: ["./listtodos.component.css"]
})
export class ListtodosComponent implements OnInit {
  todos: [] = [
    {
      description: "first",
      is_checked: true
    },
    {
      description: "second",
      is_checked: false
    }
  ];
  constructor() {}

  ngOnInit() {}
}
