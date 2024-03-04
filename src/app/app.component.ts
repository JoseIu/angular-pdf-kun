import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayOutComponent } from './pages/layOut/layOut.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayOutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'pdf-kun';
}
