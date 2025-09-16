import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCocktailFormComponent } from './cocktail-form';
import { AdminUsersTableComponent } from './users-table';
import { CocktailsService } from '../../services/cocktails.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, AdminCocktailFormComponent, AdminUsersTableComponent],
  templateUrl: './admin.html',
  styleUrls: ['./admin.css']
})
export class AdminPageComponent {
  tab = signal<'list'|'new'>('list');
  constructor(public cocktails: CocktailsService) {}
  remove(name: string){ this.cocktails.removeByName(name); }
}
