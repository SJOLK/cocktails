import { Injectable, signal, computed } from '@angular/core';
import { load, save } from './storage.util';

export interface CartItem { name: string; count: number }
type State = Record<string, CartItem>;
const KEY = 'app_cart';

@Injectable({ providedIn: 'root' })
export class CartService {
  items = signal<State>(load(KEY, {}));
  keys = computed(() => Object.keys(this.items()));
  private persist(){ save(KEY, this.items()); }

  addMany(ingredients: string[]){
    const next = { ...this.items() };
    for (const raw of ingredients){
      const k = raw.trim().toLowerCase();
      next[k] = { name: raw, count: (next[k]?.count ?? 0) + 1 };
    }
    this.items.set(next); this.persist();
  }
  inc(k:string){ const n={...this.items()}; n[k].count++; this.items.set(n); this.persist(); }
  dec(k:string){ const n={...this.items()}; if(--n[k].count<=0) delete n[k]; this.items.set(n); this.persist(); }
  remove(k:string){ const n={...this.items()}; delete n[k]; this.items.set(n); this.persist(); }
  clear(){ this.items.set({}); this.persist(); }
}
