import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-lay-out',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './layOut.component.html',
  styleUrl: './layOut.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayOutComponent { }
