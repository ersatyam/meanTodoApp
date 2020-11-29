import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
  
const routes: Routes = [
  
  {path: 'todos', component: TodosListComponent},
  {path: '', redirectTo: '/todos', pathMatch: 'full'},
  {path : 'create', component : CreateTodoComponent},
  {path : 'edit/:id', component : EditTodoComponent}
];
  
@NgModule({
 // declarations: [TodosListComponent, CreateTodoComponent,EditTodoComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
