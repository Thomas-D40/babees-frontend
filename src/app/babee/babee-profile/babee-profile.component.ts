import { Component, computed, inject, signal } from '@angular/core';
import { ActivitiesComponent } from '../activities/activities.component';
import { CareActsComponent } from '../care-acts/care-acts.component';
import { FeedingComponent } from '../feeding/feeding.component';
import { HealthActsComponent } from '../health-acts/health-acts.component';
import { InfosComponent } from '../infos/infos.component';
import { SleepingComponent } from '../sleeping/sleeping.component';
import { BabeeService } from '../../services/babee.service';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, map, of } from 'rxjs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-babee-profile',
  imports: [
    ActivitiesComponent,
    FeedingComponent,
    HealthActsComponent,
    CareActsComponent,
    SleepingComponent,
    InfosComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './babee-profile.component.html',
  styleUrl: './babee-profile.component.css',
})
export class BabeeProfileComponent {
  readonly #babeeService = inject(BabeeService);
  readonly #route: ActivatedRoute = inject(ActivatedRoute);
  readonly babeeId = Number(this.#route.snapshot.paramMap.get('id'));

  readonly selectedDate = new FormControl(
    new Date().toISOString().slice(0, 10)
  );

  // constructor() {
  //   this.selectedDate.valueChanges.subscribe((newValue) => {
  //     console.log('Nouvelle date sélectionnée:', newValue);
  //   });
  // }

  readonly #babeeResponse = toSignal(
    this.#babeeService.getBabeeById(this.babeeId).pipe(
      map((babee) => ({ value: babee, error: undefined })),
      catchError((error) => of({ value: undefined, error: error }))
    )
  );

  readonly loading = computed(() => this.#babeeResponse() === undefined);

  readonly error = computed(() => !!this.#babeeResponse()?.error);

  readonly babee = computed(() => this.#babeeResponse()?.value);
}
