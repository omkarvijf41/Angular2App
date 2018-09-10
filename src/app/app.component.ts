import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <ul>
      <li><a routerLink=""> Home:</a></li>
      /*instead of href we use routerLink attribute for anchor tag */
      <li><a routerLink="/about"> About:</a></li>
    </ul>
    <router-outlet></router-outlet>`
})

export class AppComponent  {
}
