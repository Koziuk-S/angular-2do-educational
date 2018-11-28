import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NewTodo } from '../../../shared/classes';
import { ITodo } from '../../../shared/interfaces';


@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {
  public title: string;
  public description: string;

  @ViewChild('newToDoForm') newToDoForm: FormGroup;

  @Output() submitNewTodo: EventEmitter<ITodo> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onSubmit(): void {
    this.submitNewTodo.emit(new NewTodo(this.title, this.description));
    this.newToDoForm.reset();
  }

}
