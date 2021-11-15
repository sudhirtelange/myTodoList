import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/MyComponents/Todo';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
  title:string;
  desc:string;

  statusSelected=''

  @Output() todoAdd= new EventEmitter<Todo>();

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    const todo ={
     
      title:this.title,
      desc: this.desc,
      active: true,
      status: this.statusSelected

    }
    this.todoAdd.emit(todo);
  }

}
