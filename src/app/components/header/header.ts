import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // <-- check this relative path

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class HeaderComponent {
  // expose the signal so the template can call me()
  me: () => any;

  constructor(private auth: AuthService) {
    this.me = this.auth.me;
  }

  onLoginLogout() {
    if (this.auth.me()) this.auth.logout();
    else this.auth.toggleDemo(); // toggles between user/admin demo accounts
  }
}
