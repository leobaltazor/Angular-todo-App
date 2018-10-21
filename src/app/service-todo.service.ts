import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Todo } from "./todo";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ServiceTodoService {
  private urlServe = "http://localhost:3000/";
  constructor(private http: HttpClient) {}

  getTodo(essence: string): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.urlServe + essence);
  }
  doneTodo(essence: string, elementId: number, payload): Observable<any> {
    return this.http.patch<any>(
      this.urlServe + essence + "/" + elementId,
      payload
    );
  }
  deleteTodo(essence: string, elementId: number) {
    return this.http.delete(this.urlServe + essence + "/" + elementId)
  }
}
