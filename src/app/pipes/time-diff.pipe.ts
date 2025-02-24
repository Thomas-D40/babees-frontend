import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'timeDiff' })
export class TimeDiffPipe implements PipeTransform {
  transform(start: string | Date, end: string | Date): string {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const diffMs = endDate.getTime() - startDate.getTime();

    const totalMinutes = Math.floor(diffMs / (1000 * 60));

    const hour = totalMinutes / 60;
    const remainingMinutes = totalMinutes % 60;

    if (hour) {
      return hour + 'h' + remainingMinutes + 'm';
    } else {
      return remainingMinutes + 'm';
    }
  }
}
