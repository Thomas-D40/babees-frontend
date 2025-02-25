import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { of } from 'rxjs';
import { BabeeService } from '../../services/babee.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-babee-list',
  imports: [RouterLink],
  templateUrl: './babee-list.component.html',
  styleUrl: './babee-list.component.css',
})
export class BabeeListComponent {
  readonly #babeeService = inject(BabeeService);

  readonly babeeList = toSignal(this.#babeeService.getBabeeList(), {
    initialValue: [],
  });
}
