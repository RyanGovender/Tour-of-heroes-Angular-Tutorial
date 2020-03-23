import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Superman' },
      { id: 12, name: 'Batman' },
      { id: 13, name: 'Flash' },
      { id: 14, name: 'Wonder Woman' },
      { id: 15, name: 'Green Lantern' },
      { id: 16, name: 'Aquaman' },
      { id: 17, name: 'Starfire' },
      { id: 18, name: 'Robin' },
      { id: 19, name: 'Joker' },
      { id: 20, name: 'Bane' }
    ];
    return {heroes};
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}