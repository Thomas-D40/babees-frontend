import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-infos',
  imports: [],
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.css',
})
export class InfosComponent {
  readonly todayDate = new Date().toISOString().split('T')[0];

  readonly informationList = signal([
    {
      id: 1,
      comments: 'Chalut',
    },
  ]);
}
