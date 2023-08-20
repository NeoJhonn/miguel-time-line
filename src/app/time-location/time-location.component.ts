import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeLocation } from '../time-location';
import { format } from 'date-fns';




@Component({
  selector: 'app-time-location',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <section class="listing">
    <img class="listing-photo" [src]="timeLocation.photo" alt="Exterior photo of {{timeLocation.name}}">
    <h2 class="listing-heading">{{ timeLocation.name }}</h2>
    <p class="listing-location"><img src="/assets/calendar.png" alt="calendar-icon"> {{ formatDate(timeLocation.date) }}</p>
  </section>
  `,
  styleUrls: ['./time-location.component.css']
})
export class TimeLocationComponent {
  @Input() timeLocation! : TimeLocation;

  formatDate(date: Date) {
    return format(date, 'dd/MM/yyyy')
  }
}
