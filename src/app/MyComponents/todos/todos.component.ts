import { Component, OnInit } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];
  localItem:string;


  constructor() {
    this.localItem = localStorage.getItem("todos");
    if(this.localItem==null){
      this.todos=[]
    }
    else{
      this.todos= JSON.parse(this.localItem);
    }
   }

  ngOnInit(): void {
  }
  deleteTodo(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    console.log(index);
    if(confirm("Are you sure to delete ")) {
      this.todos.splice(index,1);;
    }
    // this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));

  }
  addTodos(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));

  }
  toggletodo(todo:Todo){
    console.log(todo);    
    const index = this.todos.indexOf(todo);
    console.log(index)
    if (confirm("once completed you cannot able to change the status")){
    this.todos[index].active=!this.todos[index].active;
    alert("You have complete the task Congratulation!!");
    // Save array in local storage as string
    localStorage.setItem("todos",JSON.stringify(this.todos));
    // Get back item "todos" from local storage
    var todosFromLocalStorage = JSON.parse(localStorage.getItem("todos"));

    // Change value
    todosFromLocalStorage[index].status = "Complete";

    // Save the new item with updated value
    localStorage.setItem("todos",JSON.stringify(todosFromLocalStorage));}
  }
  pending(todo:Todo){
    const index = this.todos.indexOf(todo);
        // Save array in local storage as string
        localStorage.setItem("todos",JSON.stringify(this.todos));
        // Get back item "todos" from local storage
        var todosFromLocalStorage = JSON.parse(localStorage.getItem("todos"));
    
        // Change value
        todosFromLocalStorage[index].status = "Pending";
    
        // Save the new item with updated value
        localStorage.setItem("todos",JSON.stringify(todosFromLocalStorage));

  }
  progress(todo:Todo){
    const index = this.todos.indexOf(todo);
        // Save array in local storage as string
        localStorage.setItem("todos",JSON.stringify(this.todos));
        // Get back item "todos" from local storage
        var todosFromLocalStorage = JSON.parse(localStorage.getItem("todos"));
    
        // Change value
        todosFromLocalStorage[index].status = "Inprogress";
    
        // Save the new item with updated value
        localStorage.setItem("todos",JSON.stringify(todosFromLocalStorage));

  }
}
