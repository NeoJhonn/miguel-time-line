import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent
  ],
  template: `
  <main>
    <header class="brand-name">
      <h1><img class="brand-logo" src="/assets/baby-logo.png" alt="logo" aria-hidden="true">
    Linha do tempo do Miguel</h1>
    </header>
    <section class="content">
      <app-home></app-home>
    </section>
  </main>
`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Miguel - Linha do Tempo';
}
