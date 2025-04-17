import { Component } from '@angular/core';
import { headerComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [headerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
