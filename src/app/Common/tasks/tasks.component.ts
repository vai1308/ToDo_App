import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy ,Component, Input, Output, signal } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { AddTaskComponent } from "../add-task/add-task.component";

export interface Todo{
  title: string
  desc: string
}

@Component({
  selector: 'app-tasks',
  imports: [MatExpansionModule, NgFor, NgIf, MatIconModule, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TasksComponent{
  todos:Todo[] = [];
  @Input() favoriteItem:Todo[] = [];
  constructor(){
    const todos = localStorage.getItem('todos');
    if(todos){
      this.todos = JSON.parse(todos);
    }
  }
  readonly panelOpenState = signal(false);
  delete(todo: Todo){
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  addTask(todo: Todo){
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  favorite(item: Todo){
    this.favoriteItem.push(item);
    localStorage.setItem('todos', JSON.stringify(this.favoriteItem));
  }
}
