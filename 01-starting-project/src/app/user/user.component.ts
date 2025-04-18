import { Component , Input, EventEmitter, Output} from '@angular/core';

interface User {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  @Input({required : true}) user!: User;
  @Output() select = new EventEmitter<string>();
  @Input({required : true}) selected!: boolean;
  
  get imagePath(){
    return 'assets/users/' + this.user.avatar ; 
  }

  onSelectUser(){
    this.select.emit(this.user.id);
  }

}



// import { Component } from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// @Component({
//   selector: 'app-user',
//   standalone: true,
//   imports: [],
//   templateUrl: './user.component.html',
//   styleUrl: './user.component.css'
// })
// export class UserComponent {
//   selectedUser = DUMMY_USERS[randomIndex];

//   get imagePath(){
//     return 'assets/users/' + this.selectedUser.avatar
//   }

//   onSelectUser(){
//     const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//     this.selectedUser = DUMMY_USERS[randomIndex];
//   }

// }