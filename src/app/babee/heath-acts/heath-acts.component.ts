import { DatePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TimeToHourPipe } from '../../pipes/time-to-hour.pipe';

@Component({
  selector: 'app-heath-acts',
  imports: [TimeToHourPipe],
  templateUrl: './heath-acts.component.html',
  styleUrl: './heath-acts.component.css',
})
export class HealthActsComponent {
  readonly todayDate = new Date().toISOString().split('T')[0];

  readonly healthActList = signal([
    {
      id: 1,
      hour: Date.now(),
      healthActType: 1,
      temperature: 35,
    },
    {
      id: 2,
      hour: Date.now(),
      healthActType: 2,
      medicaments: 'Doliprane',
      quantity: 100,
    },
  ]);
}
