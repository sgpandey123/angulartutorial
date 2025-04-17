import { Component , Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required : true}) id!: string;
  @Input({required : true}) avatar!: string;
  @Input({required : true}) name!: string;

  @Output() select = new EventEmitter<string>();
  

  get imagePath(){
    return 'assets/users/' + this.avatar ; 
  }
  onSelectUser(){
    this.select.emit(this.id);
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