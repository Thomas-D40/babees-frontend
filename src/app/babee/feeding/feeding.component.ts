import { Component } from '@angular/core';

@Component({
  selector: 'app-feeding',
  imports: [],
  templateUrl: './feeding.component.html',
  styleUrl: './feeding.component.css',
})
export class FeedingComponent {
  readonly todayDate = new Date().toISOString().split('T')[0];
}
