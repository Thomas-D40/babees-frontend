import { Component, signal } from '@angular/core';
import { TimeDiffPipe } from '../../pipes/time-diff.pipe';
import { TimeToHourPipe } from '../../pipes/time-to-hour.pipe';

@Component({
  selector: 'app-sleeping',
  imports: [TimeDiffPipe, TimeToHourPipe],
  templateUrl: './sleeping.component.html',
  styleUrl: './sleeping.component.css',
})
export class SleepingComponent {
  readonly todayDate = new Date().toISOString().split('T')[0];

  readonly sleepList = signal([
    {
      id: 1,
      begin: new Date('2025-02-24T15:24:00'),
      end: new Date('2025-02-24T17:24:00'),
    },
  ]);
}
