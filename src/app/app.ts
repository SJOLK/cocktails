import { Component, signal } from '@angular/core';

import { Footer } from './components/footer/footer';
import { Cocktails } from './components/cocktails/cocktails';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Cocktails],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cocktails');
}
