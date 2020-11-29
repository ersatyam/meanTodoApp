import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TodosListComponent } from './components/todos-list/todos-list.component'
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
// const routes: Routes = [
//   { path: '', redirectTo: '/todos', pathMatch: 'full'},
//   { path: 'todos', component: TodosListComponent },
//   {path : 'create', component : CreateTodoComponent},
//   {path : 'edit/:id', component : EditTodoComponent}
// ];

@NgModule({
  imports: [ BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule], //RouterModule.forChild(routes)
  declarations: [ AppComponent, TodosListComponent, EditTodoComponent, CreateTodoComponent],
  providers: [],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }








// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// //import { AppRoutingModule } from './app-routing.module';

// import { TodosListComponent } from './components/todos-list/todos-list.component';
// import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
// import { CreateTodoComponent } from './components/create-todo/create-todo.component';

// import { Routes, RouterModule } from '@angular/router';
// const routes: Routes = [
//   {path : '', component : TodosListComponent},
//   {path : 'user', component : CreateTodoComponent},
//   {path : 'post', component : EditTodoComponent}
// ];
// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     TodosListComponent,
//     EditTodoComponent,
//     CreateTodoComponent,
//   ],
//   imports: [
//     BrowserModule,
//     RouterModule.forChild(routes),  
//     //AppRoutingModule,
//   ],
//   providers: [],
//   //exports: [RouterModule],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
