import { Injectable } from '@angular/core';
import { load, save } from './storage.util';
import { AuthService } from './auth.service';

type FavMap = Record<string, string[]>; // {userId: [cocktailName,...]}
const KEY = 'app_favorites';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  private map: FavMap = load(KEY, {} as FavMap);
  constructor(private auth: AuthService) {}

  private uid(){ return this.auth.me()?.id; }

  list(): string[] {
    const id = this.uid(); if (!id) return [];
    return this.map[id] ?? [];
  }

  isFav(name: string): boolean {
    const id = this.uid(); if (!id) return false;
    return (this.map[id] ?? []).includes(name);
  }

  toggle(name: string) {
    const id = this.uid(); if (!id) return;
    const set = new Set(this.map[id] ?? []);
    set.has(name) ? set.delete(name) : set.add(name);
    this.map[id] = [...set]; save(KEY, this.map);
  }
}
