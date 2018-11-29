import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './pages/todos/todos.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AboutProjectComponent } from './pages/about/about-project/about-project.component';
import { AboutUsComponent } from './pages/about/about-us/about-us.component';

const routes: Routes = [
  { path: '', redirectTo: 'todos', pathMatch: 'full', },
  { path: 'todos', component: TodosComponent },
  { path: 'about', component: AboutComponent,
    children: [
      { path: '', redirectTo: 'about-project', pathMatch: 'full', },
      { path: 'about-project', component: AboutProjectComponent },
      { path: 'about-us', component: AboutUsComponent }
    ]
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
