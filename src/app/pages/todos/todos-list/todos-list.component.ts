import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITodo } from '../../../shared/interfaces';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {
  @Input() todosList: Array<ITodo>;

  @Output() toggleTodo: EventEmitter<ITodo> = new EventEmitter();
  @Output() toggleDescription: EventEmitter<ITodo> = new EventEmitter();
  @Output() deleteTodo: EventEmitter<ITodo> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onToggleTodo(item: ITodo): void {
    this.toggleTodo.emit(item);
  }

  public onToggleDescription(item: ITodo): void {
    this.toggleDescription.emit(item);
  }

  public onDeleteTodo(item: ITodo): void {
    this.deleteTodo.emit(item);
  }

}
