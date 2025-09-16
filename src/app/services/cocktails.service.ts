// src/app/services/cocktails.service.ts
import { Injectable, signal } from '@angular/core';
import { load, save } from './storage.util';
import { Cocktail } from '../interfaces/cocktail.interface';   // <-- interface
import { cocktails as SEED } from '../data/data';               // <-- the array

const KEY = 'app_cocktails';

@Injectable({ providedIn: 'root' })
export class CocktailsService {
  cocktails = signal<Cocktail[]>(load<Cocktail[]>(KEY, SEED));
  private persist() { save(KEY, this.cocktails()); }

  searchByName(q: string): Cocktail[] {
    const s = q.trim().toLowerCase();
    if (!s) return this.cocktails();
    return this.cocktails().filter(c => (c.name ?? '').toLowerCase().includes(s));
  }

  add(c: Cocktail): void {
    const exists = this.cocktails().some(x => x.name.trim().toLowerCase() === c.name.trim().toLowerCase());
    this.cocktails.update(list => exists ? list : [c, ...list]);
    this.persist();
  }

  removeByName(name: string): void {
    const key = name.trim().toLowerCase();
    this.cocktails.update(list => list.filter(c => (c.name ?? '').trim().toLowerCase() !== key));
    this.persist();
  }

  upsertByName(name: string, patch: Partial<Cocktail>): void {
    const key = name.trim().toLowerCase();
    this.cocktails.update(list =>
      list.map(c => (c.name ?? '').trim().toLowerCase() === key ? { ...c, ...patch } : c)
    );
    this.persist();
  }
}
