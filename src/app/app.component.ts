import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DeliverablesComponent} from "./public/components/deliverables/deliverables.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DeliverablesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TPOpenMind';

}
