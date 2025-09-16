import { Routes } from '@angular/router';
import { CocktailsComponent } from './components/cocktails/cocktails';
import { PanierPageComponent } from './components/panier/panier';
import { AdminPageComponent } from './components/admin/admin';
import { adminGuard } from './services/auth.guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cocktails' },
  { path: 'cocktails', component: CocktailsComponent },
  { path: 'panier', component: PanierPageComponent },
  { path: 'admin', component: AdminPageComponent, canActivate: [adminGuard] },
  { path: '**', redirectTo: 'cocktails' },
];
