import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeLocationComponent } from '../time-location/time-location.component';
import { TimeLocation } from '../time-location';
import { TimeService } from '../time.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    TimeLocationComponent
  ],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filtrar por Evento" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Pesquisar</button>
      </form>
    </section>
    <section class="results">
    <!-- usa o ngFor para carregar os itens que estão no array de timeLocation-->
    <app-time-location
      *ngFor="let timeLocation of filteredTimeList"
      [timeLocation]="timeLocation">
    </app-time-location>
  </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  timeLocationList: TimeLocation[] = [];
  timeService: TimeService = inject(TimeService);
  filteredTimeList: TimeLocation[] = [];

  constructor() {
    this.timeService.getAllTimeLocations().then((timeLocationList: TimeLocation[]) => {
    this.timeLocationList = timeLocationList;
    this.filteredTimeList = timeLocationList;
    })
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredTimeList = this.timeLocationList;
    }

    this.filteredTimeList = this.timeLocationList.filter(
      timeLocation => timeLocation?.name.toLowerCase().includes(text.toLowerCase())
    );
  }
}
