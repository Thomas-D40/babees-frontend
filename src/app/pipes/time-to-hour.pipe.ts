import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeToHourFormat',
})
export class TimeToHourPipe implements PipeTransform {
  transform(value: Date | string | number): string {
    if (!value) return '';

    const date = new Date(value);

    return new Intl.DateTimeFormat('fr-FR', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false, // Désactive AM/PM
      timeZone: 'Europe/Paris', // Assure le bon fuseau horaire
    }).format(date);
  }
}
