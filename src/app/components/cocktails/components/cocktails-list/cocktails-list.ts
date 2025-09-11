import { Component, input } from '@angular/core';
import { Cocktail } from '../../../interfaces/cocktail.interface';



@Component({
  selector: 'app-cocktails-list',
  imports: [],
  templateUrl: './cocktails-list.html',
  styleUrl: './cocktails-list.css',
})
export class CocktailsList {
  cocktails = input.required<Cocktail[]>();
}
