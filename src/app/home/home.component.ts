import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

export interface User {
  name: string;
  email: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router) {}
  user: User = {
    name: '',
    email: '',
  };

  onSubmit() {
    console.log(this.user);
    this.user = { name: '', email: '' };
  }
  onAdd() {
    this.router.navigate(['/form']);
  }
}
