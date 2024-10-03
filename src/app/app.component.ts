import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InfiniteScrollDirective],
  template:`
  <main class="main">
    <router-outlet></router-outlet>
  </main>`,
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
