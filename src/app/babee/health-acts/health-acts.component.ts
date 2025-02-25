import { NgFor } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { TimeToHourPipe } from '../../pipes/time-to-hour.pipe';

@Component({
  selector: 'app-health-acts',
  imports: [TimeToHourPipe, NgFor],
  templateUrl: './health-acts.component.html',
  styleUrl: './health-acts.component.css',
})
export class HealthActsComponent {
  @Input() date!: string;
  @Input() babeeId!: number;

  readonly healthActTypeList = ['Température', 'Médicaments'];
  readonly healthActTypeSelected = signal<string>('Température');

  onChangeHealthActType(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    this.healthActTypeSelected.set(selectedValue);
  }

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

  onSubmit() {}
}
