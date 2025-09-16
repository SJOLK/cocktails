import { Component, EventEmitter, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CocktailsService } from '../../services/cocktails.service';
import { Cocktail } from '../../interfaces/cocktail.interface';

@Component({
  selector: 'app-admin-cocktail-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cocktail-form.html',
  styleUrls: ['./cocktail-form.css']
})
export class AdminCocktailFormComponent {
  @Output() saved = new EventEmitter<void>();
  model: Omit<Cocktail,'id'> = { name:'', imageUrl:'', description:'', ingredients: [''] };
  ings = signal<string[]>(['']);

  constructor(private cocktails: CocktailsService) {}

  addLine(){ this.ings.update(a => [...a, '']); }
  removeLine(i:number){ this.ings.update(a => a.length>1 ? a.filter((_,idx)=>idx!==i) : a); }

  submit(){
    const ingredients = this.ings().map(s=>s.trim()).filter(Boolean);
    if (!this.model.name.trim() || ingredients.length===0) return;
    this.cocktails.add({ ...this.model, ingredients });
    this.saved.emit();
    this.model = { name:'', imageUrl:'', description:'', ingredients:[''] };
    this.ings.set(['']);
  }
}
