import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';
import {
  MINUTES_FOR_SELECTOR,
  OPEN_HOUR_FOR_SELECTOR,
} from '../constants/app.constants';

@Component({
  selector: 'app-care-acts',
  imports: [NgFor],
  templateUrl: './care-acts.component.html',
  styleUrl: './care-acts.component.css',
})
export class CareActsComponent {
  readonly todayDate = new Date().toISOString().split('T')[0];

  readonly careActOptionList = ['Pipi', 'Caca', 'Nez', 'Oeil'];
  readonly careDetailOptionList = ['Pot', 'Couche', 'Toilettes'];

  selectedCareAct: string | null = null;
  selectedCareDetail: string | null = null;

  onCareActCheckboxChange(option: string, event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.checked) {
      this.selectedCareAct = option;
    } else {
      if (this.selectedCareAct === option) {
        this.selectedCareAct = null;
      }
    }
  }

  onCareDetailCheckboxChange(option: string, event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.checked) {
      this.selectedCareDetail = option;
    } else {
      if (this.selectedCareDetail === option) {
        this.selectedCareDetail = null;
      }
    }
  }

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
}
