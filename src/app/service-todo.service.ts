import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Todo } from "./store/models/todo.model";

@Injectable({
  providedIn: "root"
})
export class ServiceTodoService {
  private urlServe = "http://localhost:3000/";
  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
  constructor(private http: HttpClient) {}

  getTodo(essence: string): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.urlServe + essence);
  }
  doneTodo(essence: string, elementId: number, payload): Observable<any> {
    return this.http.patch<any>(
      this.urlServe + essence + "/" + elementId,
      payload, this.httpOptions
    );
  }
  deleteTodo(essence: string, elementId: number): Observable<any> {
    return this.http.delete<any>(this.urlServe + essence + "/" + elementId, this.httpOptions);
  }
  addTodo(essence: string, item: Todo): Observable<any> {
    return this.http.post<any>(this.urlServe + essence, item, this.httpOptions);
  }
}
