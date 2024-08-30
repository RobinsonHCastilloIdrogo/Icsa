import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  generatedCode: string = '';
  verificationCode: string = ''; // Código ingresado por el usuario
  username: string = '';
  password: string = '';

  constructor(private router: Router) {
    this.generateRandomCode(); // Genera el código de verificación al cargar la página
  }

  generateRandomCode() {
    this.generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
    console.log(`Generated code: ${this.generatedCode}`); // Muestra el código en la consola para pruebas
  }

  onLogin() {
    // Verifica si el código de verificación es correcto
    if (
      this.verificationCode === this.generatedCode &&
      this.username &&
      this.password
    ) {
      // Aquí puedes agregar cualquier lógica adicional para la autenticación
      // ...

      // Redirigir a la página de bienvenida
      this.router.navigate(['/auth/welcome']);
    } else {
      alert(
        'El código de verificación es incorrecto o falta información en los campos.',
      );
    }
  }
}
