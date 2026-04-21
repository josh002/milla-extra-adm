import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss'],
})
export class LoginViewComponent {
  isLoading = false;

  constructor(private authService: AuthService, private router: Router) {}

  async loginWithGoogle() {
    this.isLoading = true;
    try {
      await this.authService.loginWithGoogle();
      this.router.navigate(['/insumos']);
    } catch (error) {
      console.error('Error al iniciar sesión', error);
    } finally {
      this.isLoading = false;
    }
  }
}