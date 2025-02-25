import {
  Component,
  computed,
  effect,
  inject,
  Injector,
  Input,
  OnChanges,
  runInInjectionContext,
  Signal,
  signal,
  SimpleChanges,
} from '@angular/core';
import { ActivityService } from '../../services/activity.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { getStartAndEndOfDay, stringToDateUTC } from '../../utils/app.utils';
import { of } from 'rxjs';
import { ActivityList } from '../../models/babee.model';

@Component({
  selector: 'app-activities',
  imports: [],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.css',
})
export class ActivitiesComponent implements OnChanges {
  @Input() date!: string;
  @Input() babeeId!: number;

  private readonly activityService = inject(ActivityService);
  private injector = inject(Injector);

  activites = runInInjectionContext(this.injector, () =>
    toSignal(of(null as ActivityList | null))
  );

  ngOnChanges(changes: SimpleChanges): void {
    if (this.date && this.babeeId) {
      this.activites = runInInjectionContext(this.injector, () =>
        toSignal(
          this.activityService.getActivitiesByBabeeIdAndDate(
            this.babeeId,
            stringToDateUTC(this.date)
          )
        )
      );
    }
  }

  readonly activityList = signal([
    {
      id: 1,
      label: 'Morpion',
    },
  ]);

  onSubmit() {}
}
