import { Component, OnInit } from '@angular/core';

import { ITodo } from '../shared/interfaces';
import { NewTodo } from '../shared/classes';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public title: string;
  public description: string;

  public todos: Array<ITodo>;

  constructor() {
    this.todos = _todos;
  }

  ngOnInit() {
  }

  public onSubmit(): void {
    let newTodo: ITodo;

    newTodo = new NewTodo(this.title, this.description);
    _todos.push(newTodo);
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
    title: 'Learn SCC',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, nobis.'
  },
  <ITodo>{
    done: false,
    title: 'Learn JS',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, nobis.'
  }
];
