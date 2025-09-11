import { Component, input } from '@angular/core';
import { Cocktail } from '../../../interfaces/cocktail.interface';
@Component({
  selector: 'app-cocktail-details',
  imports: [],
  templateUrl: './cocktail-details.html',
  styleUrl: './cocktail-details.css',
})
export class CocktailDetails {
   readonly cocktail = input.required<Cocktail>();
}
