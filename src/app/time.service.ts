import { Injectable } from '@angular/core';
import { TimeLocation } from './time-location';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  timeLocationList: TimeLocation[] = [
    {
      id: 0,
      name: 'Teste de Gravidês',
      photo: `/assets/pregnacy-test.png`,
      date: new Date('2023-4-30')
    },
    {
      id: 1,
      name: 'Exame BetaHCG',
      photo: `/assets/beta-hcg-test.png`,
      date: new Date('2023-5-02')
    },
    {
      id: 2,
      name: 'Primeira Ultrasom',
      photo: `/assets/beta-hcg-test.png`,
      date: new Date('2023-5-20')
    }
  ];

  getAllTimeLocations(): TimeLocation[] {
    return this.timeLocationList;
  }

  getHousingLocationById(id: number): TimeLocation | undefined {
    return this.timeLocationList.find(timeLocation => timeLocation.id === id);
  }

  constructor() { }
}
