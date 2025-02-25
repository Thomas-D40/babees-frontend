import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feeding',
  imports: [],
  templateUrl: './feeding.component.html',
  styleUrl: './feeding.component.css',
})
export class FeedingComponent {
  @Input() date!: string;
  @Input() babeeId!: number;
  onSubmit() {}
}
