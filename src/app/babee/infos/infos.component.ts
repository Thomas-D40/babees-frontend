import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-infos',
  imports: [],
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.css',
})
export class InfosComponent {
  @Input() date!: string;
  @Input() babeeId!: number;

  readonly informationList = signal([
    {
      id: 1,
      comments: 'Chalut',
    },
  ]);

  onSubmit() {}
}
