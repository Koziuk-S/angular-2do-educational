import { Component, OnInit } from '@angular/core';
import { ITodo } from '../../shared/interfaces';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  public todos: Array<ITodo>;
  public search: string;

  constructor() {
    this.todos = _todos;
  }

  ngOnInit() {
  }

  public onSubmit(newTodo: ITodo): void {
    this.todos.push(newTodo);
  }

  public isToggleTodo(item: ITodo): void {
    item.done = !item.done;
  }

  public isToggleDescription(item: ITodo): void {
    item.isDescription = !item.isDescription;
  }

  public isDeleteTodo(item: ITodo): void {
    const index = this.todos.indexOf(item);

    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }
}

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
