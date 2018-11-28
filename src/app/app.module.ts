import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {
  HeaderComponent,
  MainNavComponent
} from './components';
import { TodosComponent } from './pages/todos/todos.component';
import { TodosListComponent } from './pages/todos/todos-list/todos-list.component';
import { NewTodoComponent } from './pages/todos/new-todo/new-todo.component';
import { HighlightDirective } from './shared/directives';
import { FilterBySearchPipe } from './shared/pipes';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodosComponent,
    TodosListComponent,
    NewTodoComponent,
    HighlightDirective,
    FilterBySearchPipe,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
