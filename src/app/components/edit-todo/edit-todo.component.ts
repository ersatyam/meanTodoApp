import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {
  state:any = {
    todo_description: '',
    todo_responsible: '',
    todo_priority: '',
    todo_completed: false
  }
  //completedCheckbox = false;
  constructor(private http: HttpClient, private route: ActivatedRoute) {
    // this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this)
    // this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this)
    // this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this)
    // this.onChangeTodoCompleted = this.onChangeTodoCompleted.bind(this)
    // this.onSubmit = this.onSubmit.bind(this)
  }

  getTodo(){
    const url ='http://localhost:4000/todos/'+this.route.snapshot.paramMap.get('id')
    this.http.get(url).subscribe((res)=>{
      this.state = res;
      //this.completedCheckbox = this.state.todo_completed;
      console.log(this.state)
    })
  }

  ngOnInit(): void {
    this.getTodo()
    //this.onChangeTodoDescription()
  }

  onChangeTodoDescription($event:any) {
    this.state.todo_description = $event.target.value
    console.log(this.state)
  }
  onChangeTodoResponsible($event:any) {
    this.state.todo_responsible = $event.target.value
    console.log(this.state)
  }
  onChangeTodoPriority($event:any) {
    this.state.todo_priority = $event.target.value
    console.log(this.state)
  }

  onChangeTodoCompleted($event:any) {
    // $event.target.checked ? "true" : "false"
    this.state.todo_completed = !this.state.todo_completed
    console.log(this.state, $event)
  }
  onSubmit($event:any) {
    $event.preventDefault();
        const obj = {
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        };
        console.log(obj);
        const url = 'http://localhost:4000/todos/update/'+this.route.snapshot.paramMap.get('id')
        this.http.post(url, obj).subscribe((res)=>{
          console.log(res)
        })
  }

}
