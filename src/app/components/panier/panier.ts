import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panier.html',
  styleUrls: ['./panier.css']
})
export class PanierPageComponent {
  constructor(public cart: CartService) {}
  keys(){ return this.cart.keys(); }
}
