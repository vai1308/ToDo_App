import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { Todo } from '../tasks/tasks.component';

@Component({
  selector: 'app-add-task',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AddTaskComponent {
  title: string = '';
  desc: string = '';
  @Output() taskAdd:EventEmitter<Todo> = new EventEmitter();
  onSubmit() {
    const task = {
      title : this.title,
      desc : this.desc
    }
    this.taskAdd.emit(task);
  }
}
