import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-password-reset-confirmation',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './password-reset-confirmation.component.html',
  styleUrl: './password-reset-confirmation.component.css',
})
export class PasswordResetConfirmationComponent {}
