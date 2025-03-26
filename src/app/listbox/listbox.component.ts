import { Component, input, output } from '@angular/core';
import { Todo } from '../todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-listbox',
  imports: [FormsModule, NgClass],
  templateUrl: './listbox.component.html',
  styleUrl: './listbox.component.scss'
})
export class ListboxComponent {

todos = input<Todo[]>();
removeTodoClick = output<Todo>();
editTodoClick = output<Todo>();
todoDoneChanged = output();

toggledone(todo: Todo) {
  todo.done = !todo.done;
}
// Added output event

  removeTodo(todo: Todo) {
    this.removeTodoClick.emit(todo);
  }

  doneChanged(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    if(checkbox.checked){
      this.todoDoneChanged.emit();
    }
  }
  doneStyle(todo: Todo) {
    return { 'done': todo.done };
  }

  editTodo(todo: Todo) {
    this.editTodoClick.emit(todo); // Emit the event when edit button is clicked
  }
}