import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";

// This is the main application component for an Angular application.
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
