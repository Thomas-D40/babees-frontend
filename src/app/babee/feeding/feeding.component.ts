import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-feeding',
  imports: [NgFor, FormsModule, ReactiveFormsModule],
  templateUrl: './feeding.component.html',
  styleUrl: './feeding.component.css',
})
export class FeedingComponent {
  @Input() date!: string;
  @Input() babeeId!: number;
  onSubmit() {}

  form: FormGroup;
  options = [2, 3, 4, 5]; // Nombre de FormControl possibles

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      selectedOption: new FormControl(2), // Option par défaut (2 FormControl)
      dynamicFields: this.fb.array([]), // FormArray qui contiendra les FormControl dynamiques
    });
    this.repas.forEach((ligne) => {
      this.checkedOptions[ligne] = {};
      this.mealOptions.forEach((option) => {
        this.checkedOptions[ligne][option] = false;
      });
    });
  }

  selectedKey: keyof typeof this.repas_V2 = 'biberon';

  objectKeys(obj: object): string[] {
    return Object.keys(obj);
  }

  repas = [
    'Sauté de porc',
    'Colin',
    'Purée de céléri',
    'Purée pomme groseille',
  ];

  repas_V2: { [key in 'biberon' | 'petit' | 'moyen' | 'grand']: string[] } = {
    biberon: [],
    petit: [
      'Sauté de porc',
      'Colin',
      'Purée de céléri',
      'Purée pomme groseille',
    ],
    moyen: [
      'Sauté de porc',
      'Colin',
      'Purée de céléri',
      'Fraidou',
      'Purée pomme groseille',
    ],
    grand: [
      'Sauté de porc',
      'Colin',
      'Semoule',
      'Fraidou',
      'Purée pomme groseille',
    ],
  };

  mealOptions = ['A gouté', 'En partie', 'Entièrement'];

  checkedOptions: { [key: string]: { [key: string]: boolean } } = {};

  toggleCheckbox(ligne: string, option: string) {
    this.checkedOptions[ligne][option] = !this.checkedOptions[ligne][option];
  }
}
