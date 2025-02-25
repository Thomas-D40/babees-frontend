import { Component, signal } from '@angular/core';
import { ActivitiesComponent } from '../activities/activities.component';
import { CareActsComponent } from '../care-acts/care-acts.component';
import { FeedingComponent } from '../feeding/feeding.component';
import { HealthActsComponent } from '../health-acts/health-acts.component';
import { InfosComponent } from '../infos/infos.component';
import { SleepingComponent } from '../sleeping/sleeping.component';

@Component({
  selector: 'app-babee-profile',
  imports: [
    ActivitiesComponent,
    FeedingComponent,
    HealthActsComponent,
    CareActsComponent,
    SleepingComponent,
    InfosComponent,
  ],
  templateUrl: './babee-profile.component.html',
  styleUrl: './babee-profile.component.css',
})
export class BabeeProfileComponent {
  readonly todayDate = new Date().toISOString().split('T')[0];
  readonly enfant = signal({
    id: '1',
    nom: 'toto',
    prenom: 'titi',
    age: 1,
    // Mettre date de naissance à la place
    photo: null,
  });
}
