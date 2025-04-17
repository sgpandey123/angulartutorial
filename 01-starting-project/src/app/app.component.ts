import { Component } from '@angular/core';
import { headerComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [headerComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  user=DUMMY_USERS[0];

  // onSelectUser(id: string) {
  //   console.log('Selected user ID:', id);
  // }
  onSelectUser(id: string) {
    console.log('Selected user ID:', id);
    this.user = this.users.find(user => user.id === id)!;
    
  }
}
