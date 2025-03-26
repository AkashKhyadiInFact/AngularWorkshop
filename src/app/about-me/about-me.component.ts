import { booleanAttribute, Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  name = input<string>();
  big = input(false, { transform: booleanAttribute }); //?big=true
  age = input<number>(18); //?big=true&age=18
  company = '';
  router = inject(Router);

  constructor() {
    const state = this.router.getCurrentNavigation()?.extras.state;
    if (state) {
      this.company = state['company'];
    }
  }
}
