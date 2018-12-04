import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AboutProjectComponent } from './pages/about/about-project/about-project.component';
import { AboutUsComponent } from './pages/about/about-us/about-us.component';
import { UserComponent } from './pages/about/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodosComponent,
    TodosListComponent,
    NewTodoComponent,
    HighlightDirective,
    FilterBySearchPipe,
    MainNavComponent,
    AboutComponent,
    NotFoundComponent,
    AboutProjectComponent,
    AboutUsComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
