import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersService, UserRow } from '../../services/users.service';

@Component({
  selector: 'app-admin-users-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './users-table.html',
  styleUrls: ['./users-table.css']
})
export class AdminUsersTableComponent {
  constructor(public users: UsersService) {}
  newUser: Omit<UserRow,'id'> = { name:'', email:'', role:'user' };
  add(){ if(!this.newUser.name || !this.newUser.email) return; this.users.add(this.newUser); this.newUser = {name:'',email:'',role:'user'}; }
}
