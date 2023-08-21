import { Injectable } from '@angular/core';
import { TimeLocation } from './time-location';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor() { }

  url = 'http://localhost:3000/times';

  async getAllTimeLocations(): Promise<TimeLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getTimeLocationById(id: number):  Promise<TimeLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Livro de visitas: Nome: ${firstName}, Sobrenome: ${lastName}, e-mail: ${email}.`);
  }


}
