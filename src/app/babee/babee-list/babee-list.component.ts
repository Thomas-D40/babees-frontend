import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-babee-list',
  imports: [RouterLink],
  templateUrl: './babee-list.component.html',
  styleUrl: './babee-list.component.css',
})
export class BabeeListComponent {
  readonly enfantList = signal([
    {
      id: 1,
      prenom: 'toto',
      photo: null,
    },
    {
      id: 2,
      prenom: 'toto',
      photo: null,
    },
    {
      id: 3,
      prenom: 'toto',
      photo: null,
    },
    {
      id: 4,
      prenom: 'toto',
      photo: null,
    },
    {
      id: 5,
      prenom: 'toto',
      photo: null,
    },
  ]);
}
