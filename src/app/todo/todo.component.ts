import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {FormControl, FormGroup, Validators} from '@angular/forms';

let _id = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [
    {
      id: 1,
      content: 'workout',
      complete: true
    },
    {
      id: 2,
      content: 'do homework',
      complete: false
    },
    {
      id: 3,
      content: 'do laundry',
      complete: false
    },
  ];
  content = new FormControl();
  todo: Todo;

  constructor() {
  }

  ngOnInit() {
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        id: _id++,
        content: value,
        complete: false
      };
    }
    this.todos.push(this.todo);
    this.content.reset();
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }
}
