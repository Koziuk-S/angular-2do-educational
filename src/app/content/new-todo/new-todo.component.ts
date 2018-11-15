import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NewTodo } from 'src/app/shared/classes';
import { ITodo } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {
  public title: string;
  public description: string;

  @Output() submitNewTodo: EventEmitter<ITodo> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onSubmit(): void {
    this.submitNewTodo.emit(new NewTodo(this.title, this.description));
  }

}
