import { Component, Input, signal } from '@angular/core';
import { TimeDiffPipe } from '../../pipes/time-diff.pipe';
import { TimeToHourPipe } from '../../pipes/time-to-hour.pipe';
import {
  MINUTES_FOR_SELECTOR,
  OPEN_HOUR_FOR_SELECTOR,
} from '../../constants/app.constants';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-sleeping',
  imports: [TimeDiffPipe, TimeToHourPipe, NgFor],
  templateUrl: './sleeping.component.html',
  styleUrl: './sleeping.component.css',
})
export class SleepingComponent {
  @Input() date!: string;
  @Input() babeeId!: number;

  readonly todayDate = new Date().toISOString().split('T')[0];

  readonly hours = OPEN_HOUR_FOR_SELECTOR;
  readonly minutes = MINUTES_FOR_SELECTOR;

  readonly sleepList = signal([
    {
      id: 1,
      begin: new Date('2025-02-24T15:24:00'),
      end: new Date('2025-02-24T17:24:00'),
    },
  ]);
}
