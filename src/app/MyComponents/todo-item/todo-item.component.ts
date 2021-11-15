import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo:Todo;
  @Input() i:number;
  @Output() todoDelete=new EventEmitter<Todo>();
  @Output() todoCheckbox=new EventEmitter<Todo>();
  @Output() todopending=new EventEmitter<Todo>();
  @Output() todoprogress=new EventEmitter<Todo>();


 

  constructor() { }

  ngOnInit(): void {
  }
onDelete(todo:Todo){
  this.todoDelete.emit(todo);
  console.log("Delete button has triggered");

}
onCheckboxClick(todo:Todo){
  this.todoCheckbox.emit(todo);
  this.todo.status="Completed"
  // this.status='complete'


}
statuspending(todo:Todo){
  // this.status='pending'
  this.todopending.emit(todo);
  this.todo.status="Pending"  

}
statusprogress(todo:Todo){
  // this.status='progress'
  this.todoprogress.emit(todo);
  this.todo.status="Inprogress"

}
// getcolor(status){
//   if(status='Completed'){
//    return 'red'
//   }
//   else if(status='Pending'){
//     return 'red'
//   }
//   else{ return'blue'}
 
//   }



}
