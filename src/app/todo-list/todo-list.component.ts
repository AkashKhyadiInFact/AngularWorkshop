import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FocusDirective } from '../focus.directive';
import { ListboxComponent } from "../listbox/listbox.component";
import { ChuckNorrisService } from '../chuck-norris.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  imports: [FormsModule, FocusDirective, ListboxComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})

export class TodoListComponent {
 todoText ='';
 priority: Priority = 'medium';
 priorities: Priority[] = ['low', 'medium', 'high'];
  todos: Todo[] = [];
  isEditMode = false; 
  updateTodoIndex = -1;
  jokeText = '';
  chuckNorrisService = inject(ChuckNorrisService);
  router = inject(Router);

  goToAboutMePage(){
    this.router.navigate(['about','Akash']);
  }

  todoDone(){
    this.chuckNorrisService.loadJoke()
    .subscribe(joke => this.jokeText = joke.value);
  }

  addTodo() {
    const todo:Todo = {
      text: this.todoText,
      priority: this.priority,
      done: false
    };
    this.todos.push(todo);
    this.todoText = '';
    this.priority = 'medium';
  } 
  removeTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t !== todo);
  }

  editTodo(todo: Todo) {
    this.isEditMode = true;
    this.todoText = todo.text;
    this.priority = todo.priority;
    this.updateTodoIndex = this.todos.indexOf(todo);
  }

  updateTodo() {
  this.todos[this.updateTodoIndex].text = this.todoText;
  this.todos[this.updateTodoIndex].priority = this.priority;
  this.isEditMode = false;
  this.todoText = '';
  this.priority = 'medium';
}
}

export interface Todo {
  done: boolean;
  text: string;
  priority: Priority;
}

export type Priority = 'low' | 'medium' | 'high';