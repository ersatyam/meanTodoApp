import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {
  todos:any= []
  constructor(private http: HttpClient) { }

  getData(){
    const url ='http://localhost:4000/todos/'
    this.http.get(url).subscribe((res)=>{
      this.todos = res
      console.log(this.todos)
    })
  }
  
  ngOnInit(): void {
    this.getData()
  }

}
