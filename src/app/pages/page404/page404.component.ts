import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page404',
  standalone: true,
  imports: [RouterLink],
  template:`
  <section>
    <h1>404: Page Not Found</h1>
    <p>Se ve que no hay nada aquí. Vuelve al inicio para seguir explorando más cartas!</p>
    <a [routerLink]="['/']">Volver al inicio</a>
  </section>`,
  styleUrl: './page404.component.scss'
})
export class Page404Component {

}
