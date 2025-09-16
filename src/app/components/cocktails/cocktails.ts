import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';         // *ngIf, etc.
import { FormsModule } from '@angular/forms';           // [(ngModel)]
import { CocktailsService } from '../../services/cocktails.service';
import { FavoritesService } from '../../services/favorites.service';
import { CartService } from '../../services/cart.service';
import { Cocktail } from '../../interfaces/cocktail.interface';

// 👉 chemins depuis src/app/components/cocktails/cocktails.ts
import { CocktailsListComponent } from './components/cocktails-list/cocktails-list';
import { CocktailDetails } from './components/cocktail-details/cocktail-details';

@Component({
  selector: 'app-cocktails',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CocktailsListComponent,
    CocktailDetails,
  ],
  templateUrl: './cocktails.html',
  styleUrls: ['./cocktails.css'],
})
export class CocktailsComponent {     // ✅ nomme la classe en *Component*
  constructor(
    public cocktailsSvc: CocktailsService,
    private favs: FavoritesService,
    private cart: CartService
  ) {}

  query = signal('');
  list = computed<Cocktail[]>(() =>
    this.query().trim()
      ? this.cocktailsSvc.searchByName(this.query())
      : this.cocktailsSvc.cocktails()
  );

  selected = signal<Cocktail | null>(null);
  select(c: Cocktail) { this.selected.set(c); }

  addToCart(c: Cocktail) { this.cart.addMany(c.ingredients); }
  onToggleFav = (name: string) => this.favs.toggle(name);
  isFav = (name: string) => this.favs.isFav(name);
}
