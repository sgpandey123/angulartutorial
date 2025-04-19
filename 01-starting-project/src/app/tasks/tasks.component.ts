import { Component , Input} from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model';
import {TasksService} from './tasks.service';



@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent , NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
  @Input({required : true}) userId!: string;
  @Input({required : true}) name!: string;
  isNewTask = false;


  constructor(private tasksService : TasksService) {
   
  }

  get selectedUserTasks(){
   return this.tasksService.getSelectedUser(this.userId);
  }

  onCompleteTask(id: string) {
    console.log('Completed task ID:', id);
    this.tasksService.onCompleteTask(id);
  }

  onNewTask() {
    this.isNewTask = !this.isNewTask;
  }

  onCancelAddTask() {
    this.isNewTask = false;
  }

  onAddTask(taskData: NewTaskData) {
    console.log('New task data:', taskData);
    this.isNewTask = false;
    this.tasksService.addTask(taskData, this.userId);
  };
    

   
}
