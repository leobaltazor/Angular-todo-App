import { Component, OnInit, Input } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Todo } from "src/app/todo";
import { ServiceTodoService } from "../../service-todo.service";

@Component({
  selector: "app-item-todo",
  templateUrl: "./item-todo.component.html",
  styleUrls: ["./item-todo.component.css"]
})
export class ItemTodoComponent implements OnInit {
  @Input()
  todo: Todo;
  todoItem = new FormGroup({
    id: new FormControl(""),
    description: new FormControl(""),
    is_checked: new FormControl("")
  });
  constructor(private serviceTodoService: ServiceTodoService) {}

  ngOnInit() {
    this.todoItem.setValue({
      id: this.todo.id,
      description: this.todo.description,
      is_checked: this.todo.is_checked
    });
    this.todoItem.valueChanges.subscribe(value => {
      this.onCheckClick(value.id, value);
    });
  }
  onDeleteClick(item: Todo): void {
    this.serviceTodoService.deleteTodo("todos", item.id);
  }
  onCheckClick(item, payload): void {
    this.serviceTodoService
      .doneTodo("todos", item, payload)
      .subscribe(res => console.log(res));
  }
}
