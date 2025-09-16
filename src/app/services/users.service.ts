import { Injectable, signal } from '@angular/core';
import { load, save } from './storage.util';
import type { Role } from './auth.service';

export interface UserRow { id: string; name: string; email: string; role: Role }
const KEY = 'app_users';

const seed: UserRow[] = [
  { id: '1', name: 'Admin', email: 'admin@demo.fr', role: 'admin' },
  { id: '2', name: 'User',  email: 'user@demo.fr',  role: 'user'  },
];

@Injectable({ providedIn: 'root' })
export class UsersService {
  users = signal<UserRow[]>(load(KEY, seed));
  private persist(){ save(KEY, this.users()); }
  add(u: Omit<UserRow,'id'>){ const id=Math.random().toString(36).slice(2); this.users.update(L=>[{id,...u},...L]); this.persist(); }
  remove(id:string){ this.users.update(L=>L.filter(u=>u.id!==id)); this.persist(); }
  setRole(id:string, role:Role){ this.users.update(L=>L.map(u=>u.id===id?{...u,role}:u)); this.persist(); }
}
