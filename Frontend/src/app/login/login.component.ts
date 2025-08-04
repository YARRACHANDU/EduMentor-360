import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class Login implements OnInit {
  
  isSignUpMode = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.setupEventListeners();
  }

  setupEventListeners() {
    // Using Angular approach instead of direct DOM manipulation
    setTimeout(() => {
      const signUpButton = document.getElementById('signUp');
      const signInButton = document.getElementById('signIn');
      const container = document.getElementById('container');

      if (signUpButton && container) {
        signUpButton.addEventListener('click', () => {
          this.toggleSignUpMode(true);
        });
      }

      if (signInButton && container) {
        signInButton.addEventListener('click', () => {
          this.toggleSignUpMode(false);
        });
      }
    });
  }

  toggleSignUpMode(isSignUp: boolean) {
    this.isSignUpMode = isSignUp;
    const container = document.getElementById('container');
    if (container) {
      if (isSignUp) {
        container.classList.add('right-panel-active');
      } else {
        container.classList.remove('right-panel-active');
      }
    }
  }

  onSignIn(event: Event) {
    event.preventDefault();
    console.log('Sign In clicked');
    // Add your sign-in logic here
  }

  onSignUp(event: Event) {
    event.preventDefault();
    console.log('Sign Up clicked');
    // Add your sign-up logic here
  }
}
