import { NgFor } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-health-acts',
  imports: [NgFor, FormsModule],
  templateUrl: './health-acts.component.html',
  styleUrl: './health-acts.component.css',
})
export class HealthActsComponent {
  @Input() date!: string;
  @Input() babeeId!: number;

  readonly healthActTypeList = ['Température', 'Médicaments'];
  readonly healthActTypeSelected = signal<string>('Température');

  heure: string = '08:00';

  onChangeHealthActType(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    this.healthActTypeSelected.set(selectedValue);
  }

  readonly healthActList = signal([
    {
      id: 1,
      hour: '08:45',
      healthActType: 1,
      temperature: 35,
    },
    {
      id: 2,
      hour: '15:30',
      healthActType: 2,
      medicaments: 'Doliprane',
      quantity: 100,
    },
  ]);

  onSubmit() {}
}
