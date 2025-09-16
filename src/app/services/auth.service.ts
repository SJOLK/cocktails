import { Injectable, signal, computed } from '@angular/core';
import { load, save } from './storage.util';

export type Role = 'admin' | 'user';
export interface AppUser { id: string; name: string; email: string; role: Role; favorites: string[] }

const KEY = 'app_auth_user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  me = signal<AppUser | null>(load<AppUser | null>(KEY, null));
  isAdmin = computed(() => this.me()?.role === 'admin');

  loginAs(role: Role) {
    const u: AppUser = role === 'admin'
      ? { id:'1', name:'Admin', email:'admin@demo.fr', role:'admin', favorites:[] }
      : { id:'2', name:'User',  email:'user@demo.fr',  role:'user',  favorites:[] };
    this.me.set(u); save(KEY, u);
  }
  toggleDemo() { this.loginAs(this.me()?.role === 'admin' ? 'user' : 'admin'); }
  logout(){ this.me.set(null); save(KEY, null); }
}
