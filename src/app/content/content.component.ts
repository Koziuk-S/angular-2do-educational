import { Component, OnInit } from '@angular/core';

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

  public toggleTodo(item: ITodo): void {
    item.done = !item.done;
  }

  public toggleDescription(item: ITodo): void {
    item.isDescription = !item.isDescription;
  }

  public deleteTodo(item: ITodo): void {
    const index = this.todos.indexOf(item);

    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }
}

interface ITodo {
  done: boolean;
  title: string;
  description: string;
  isDescription: boolean;
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


class NewTodo implements ITodo {
  constructor(
    public title: string,
    public description: string,
    public done: boolean = false,
    public isDescription: boolean = false
  ) {}
}
