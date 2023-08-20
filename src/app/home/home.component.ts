import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeLocationComponent } from '../time-location/time-location.component';
import { TimeLocation } from '../time-location';

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
        <input type="text" placeholder="Filtro por Data">
        <button class="primary" type="button">Pesquisar</button>
      </form>
    </section>
    <section class="results">
    <app-time-location [timeLocation]="timeLocation"></app-time-location>
  </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  readonly baseUrl  = 'https://assets-production.teampeanut.com/stored-image/750';

  timeLocation: TimeLocation = {
  id: 9999,
  name: 'Teste de Gravidês',
  photo: `${this.baseUrl}/2d23m-8amsfn.webp?ow=1200&oh=452`,
  date: new Date('2023-4-30')
}
}
