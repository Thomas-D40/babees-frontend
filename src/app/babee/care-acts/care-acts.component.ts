import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-care-acts',
  imports: [NgFor],
  templateUrl: './care-acts.component.html',
  styleUrl: './care-acts.component.css',
})
export class CareActsComponent {
  readonly todayDate = new Date().toISOString().split('T')[0];

  readonly careActList = signal([
    {
      id: 1,
      careActType: 1,
      careActDetail: 1,
      commentaire: null,
    },
    {
      id: 2,
      careActType: 1,
      careActDetail: 2,
      commentaire: null,
    },
    {
      id: 3,
      careActType: 2,
      careActDetail: 3,
      commentaire: null,
    },
    {
      id: 4,
      careActType: 3,
    },
    {
      id: 5,
      careActType: 4,
      commentaire: 'Chalut',
    },
  ]);

  onSubmit() {}

  readonly options1 = ['Pipi', 'Caca', 'Nez', 'Oeil'];
  readonly options2 = ['Pot', 'Couche', 'Toilettes'];
  hours: number[] = Array.from({ length: 11 }, (_, i) => i + 8);
  minutes: number[] = Array.from({ length: 12 }, (_, i) => i * 5);
}
