import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {
  state:any = {
    todo_description: '',
    todo_responsible: '',
    todo_priority: '',
    todo_completed: false
  }
  

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log(this.state)
  }

  onChangeTodoDescription(e:any) {
    this.state.todo_description = e.target.value
    console.log(this.state)
  }
  onChangeTodoResponsible(e:any) {
    this.state.todo_responsible = e.target.value
    console.log(this.state)
  }
  onChangeTodoPriority(e:any) {
    this.state.todo_priority = e.target.value
    console.log(this.state)
  }

  onSubmit(todoForm:any) {
      const newTodo = {
          todo_description: todoForm.value.description,
          todo_responsible: todoForm.value.responsible,
          todo_priority: todoForm.value.priorityOptions,
          todo_completed: this.state.todo_completed
      };
      console.log(newTodo);
      const url = 'http://localhost:4000/todos/add/'
      this.http.post(url, newTodo).subscribe((res)=>{
        console.log(res)
      })
  }
  // onSubmit(e:any) {
  //   e.preventDefault(); 
  //       const newTodo = {
  //           todo_description: this.state.todo_description,
  //           todo_responsible: this.state.todo_responsible,
  //           todo_priority: this.state.todo_priority,
  //           todo_completed: this.state.todo_completed
  //       };
  //       console.log(newTodo);
  //       const url = 'http://localhost:4000/todos/add/'
  //       this.http.post(url, newTodo).subscribe((res)=>{
  //         console.log(res)
  //       })
  // }

}
