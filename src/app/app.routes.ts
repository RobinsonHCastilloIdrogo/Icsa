import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { RecoverPasswordComponent } from './modules/auth/recover-password/recover-password.component';
import { PasswordResetConfirmationComponent } from './modules/auth/password-reset-confirmation/password-reset-confirmation.component';
import { WelcomeComponent } from './modules/auth/welcome/welcome.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'contrasena', component: RecoverPasswordComponent },
  { path: 'contrasenaauth', component: PasswordResetConfirmationComponent },
  { path: 'inicio', component: WelcomeComponent },
];
