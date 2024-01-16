import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-home.page',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './home.page.component.html',
  styleUrl: './home.page.component.css'
})
export class HomePageComponent {
  url: string = '';

  constructor(private router: Router) {

  }

  shrink() {
    this.router.navigate(['/shrink'], {queryParams: {
        url: this.url
    }})
  }
}
