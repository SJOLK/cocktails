import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cocktail } from '../../../../interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktails-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cocktails-list.html',
  styleUrls: ['./cocktails-list.css']
})
export class CocktailsListComponent {
@Input() cocktails: Cocktail[] = [];
@Input() isFav!: (name: string) => boolean;
@Output() toggleFav = new EventEmitter<string>();
@Output() select = new EventEmitter<Cocktail>();

}
