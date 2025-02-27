import { Component, Input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MINUTES_FOR_SELECTOR,
  OPEN_HOUR_FOR_SELECTOR,
} from '../../constants/app.constants';
import { TimeDiffPipe } from '../../pipes/time-diff.pipe';

@Component({
  selector: 'app-sleeping',
  imports: [TimeDiffPipe, FormsModule],
  templateUrl: './sleeping.component.html',
  styleUrl: './sleeping.component.css',
})
export class SleepingComponent {
  @Input() date!: string;
  @Input() babeeId!: number;

  debut: string = '08:00';
  fin: string = '08:05';
  plagesHoraires: { debut: string; fin: string }[] = [];

  ajouterPlageHoraire() {
    if (this.debut >= '08:00' && this.fin <= '18:00' && this.debut < this.fin) {
      this.plagesHoraires.push({ debut: this.debut, fin: this.fin });
    } else {
      alert('Les heures doivent être entre 08:00 et 18:00 et début < fin.');
    }
  }

  readonly todayDate = new Date().toISOString().split('T')[0];

  readonly hours = OPEN_HOUR_FOR_SELECTOR;
  readonly minutes = MINUTES_FOR_SELECTOR;

  readonly sleepList = signal([
    {
      id: 1,
      begin: '08:00',
      end: '12:00',
    },
  ]);
}
