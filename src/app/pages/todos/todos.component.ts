import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ITodo } from '../../shared/interfaces';
import { TodoService } from 'src/app/shared/services';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  public todos: Array<ITodo>;
  public search: string;
  private modalRef: BsModalRef;

  @ViewChild('editTodoModal') editTodoModal: ElementRef;

  constructor(
    private todoService: TodoService,
    private modalService: BsModalService
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

  public isEditTodo(item: ITodo): void {
    this.modalRef = this.modalService.show(this.editTodoModal, {
      class: 'modal-dialog-centered app-modal',
      ignoreBackdropClick: true
    });
  }

  public cancel(): void {
    this.modalRef.hide();
  }

  public save(): void {
    this.modalRef.hide();
  }
}
