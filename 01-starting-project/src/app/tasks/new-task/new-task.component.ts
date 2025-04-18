import { Component, Output , EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})

export class NewTaskComponent {

  @Output() cancel = new EventEmitter<void>();
  @Output() addEvent = new EventEmitter< NewTaskData>();

  enteredTitle = '';
  enteredSummery = '';
  enteredDate = '';

  onCancelAddTask(){
    this.cancel.emit();
  }

  onSubmit(){
    console.log('New task data:')
    this.addEvent.emit({
      title: this.enteredTitle,
      summary: this.enteredSummery,
      date: this.enteredDate
    });

  }
}
