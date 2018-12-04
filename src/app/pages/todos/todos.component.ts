import { Component, OnInit } from '@angular/core';
import { ITodo } from '../../shared/interfaces';
import { TodoService } from 'src/app/shared/services';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  public todos: Array<ITodo>;
  public search: string;

  constructor(
    private todoService: TodoService
  ) {
    this.todos = [];
  }

  ngOnInit() {
    this.getTodo();
  }

  private getTodo(): void {
    this.todoService.getTodo().subscribe(
      data => {
        console.log(data);
        this.todos = data;
      },
      err => {
        console.error(err);
      }
    );
  }

  public onSubmit(newTodo: ITodo): void {
    newTodo.id = this.todos.slice(-1)[0].id + 1;

    this.todoService.addTodo(newTodo).subscribe(() => {
      this.getTodo();
    });
  }

  public isToggleTodo(item: ITodo): void {
    item.done = !item.done;

    this.todoService.updateTodo(item).subscribe(() => {
        this.getTodo();
      }
    );
  }

  public isToggleDescription(item: ITodo): void {
    item.isDescription = !item.isDescription;
  }

  public isDeleteTodo(item: ITodo): void {
    this.todoService.delTodo(item.id).subscribe(() => {
        this.getTodo();
      }
    );
  }
}
