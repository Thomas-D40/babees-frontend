import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';
import {
  MINUTES_FOR_SELECTOR,
  OPEN_HOUR_FOR_SELECTOR,
} from '../constants/app.constants';
import {
  CARE_ACT_DETAIL_LIST,
  CARE_ACT_TYPE_LIST,
} from '../../models/babee.model';

@Component({
  selector: 'app-care-acts',
  imports: [NgFor],
  templateUrl: './care-acts.component.html',
  styleUrl: './care-acts.component.css',
})
export class CareActsComponent {
  readonly todayDate = new Date().toISOString().split('T')[0];

  readonly careActOptionList = CARE_ACT_TYPE_LIST;
  readonly careDetailOptionList = CARE_ACT_DETAIL_LIST;

  selectedCareAct: number | null = null;
  selectedCareDetail: number | null = null;

  onCareActCheckboxChange(optionId: number, event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.checked) {
      this.selectedCareAct = optionId;
    } else {
      if (this.selectedCareAct === optionId) {
        this.selectedCareAct = null;
      }
    }
  }

  onCareDetailCheckboxChange(option: number, event: Event): void {
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
