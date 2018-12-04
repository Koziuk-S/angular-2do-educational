import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITodo } from '../../interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = 'http://localhost:3000/todos';
  }

  public getTodo(): Observable<Array<ITodo>> {
    return this.http.get<Array<ITodo>>(this.url);
  }

  public addTodo(todo: ITodo): Observable<Array<ITodo>> {
    return this.http.post<Array<ITodo>>(this.url, todo);
  }

  public delTodo(id: number): Observable<Array<ITodo>> {
    return this.http.delete<Array<ITodo>>(`${this.url}/${id}`);
  }

  public updateTodo(todo: ITodo): Observable<Array<ITodo>> {
    console.log(todo);
    return this.http.put<Array<ITodo>>(`${this.url}/${todo.id}`, todo);
  }

  // hove to use mock data
  public getTodoList(): Observable<Array<ITodo>> {
    return new Observable((observer) => {
      observer.next(_todos);
      observer.complete();
      // throw new Error('something happened - error');
    });
  }

}

// mock data
const _todos: Array<ITodo> = [
  <ITodo>{
    done: true,
    title: 'Learn HTML',
    description: ''
  },
  <ITodo>{
    done: false,
    title: 'Learn CSS',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, nobis.'
  },
  <ITodo>{
    done: false,
    title: 'Learn JS',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, nobis.'
  }
];
