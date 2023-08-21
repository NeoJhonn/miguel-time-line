import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router'
import { TimeService } from '../time.service';
import { TimeLocation } from '../time-location';
import { format } from 'date-fns';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  template: `
    <article>
      <img class="listing-photo" [src]="timeLocation?.photo"
        alt="Exterior photo of {{timeLocation?.name}}"/>
      <section class="listing-description">
        <h2 class="listing-heading">{{timeLocation?.name}}</h2>
        <p class="listing-location"><img src="/assets/calendar.png" alt="calendar-icon">
        {{ formatDate() }}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">Sobre este Momento</h2>
        <ul>
          <li>Médico: {{ timeLocation?.physician }}</li>
          <li>Evento: {{ timeLocation?.event }}</li>

        </ul>
      </section>
      <section class="listing-apply">
        <h2 class="section-heading">Assine o livro de visitas</h2>
        <form [formGroup]="applyForm" (submit)="submitApplication()">
          <label for="first-name">Nome:</label>
          <input id="first-name" type="text" formControlName="firstName">

          <label for="last-name">Sobrenome:</label>
          <input id="last-name" type="text" formControlName="lastName">

          <label for="email">Email:</label>
          <input id="email" type="email" formControlName="email">
          <button type="submit" class="primary">Assinar</button>
        </form>
    </section>
    </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  timeService = inject(TimeService);
  timeLocation: TimeLocation | undefined;

  // Cria um objeto form
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor() {
    const timeLocationId = parseInt(this.route.snapshot.params['id'], 4);
    this.timeService.getTimeLocationById(timeLocationId).then(timeLocation => {
      this.timeLocation = timeLocation;
    });
  }

  // Lida com o cadastro no livro de visitas
  submitApplication() {
    // O '??' é o operador nullish coalescing que seta um string '' caso o valor seja null
    this.timeService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }



  formatDate() {
    if (this.timeLocation?.date !== undefined) {
      return format(new Date(this.timeLocation.date), 'dd/MM/yyyy');
    }

    return '';
  }

}
