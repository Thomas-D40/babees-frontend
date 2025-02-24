import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-activities',
  imports: [],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.css',
})
export class ActivitiesComponent {
  readonly todayDate = new Date().toISOString().split('T')[0];

  readonly activityList = signal([
    {
      id: 1,
      label: 'Morpion',
    },
  ]);
}
