import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../../services/card.service';
import { Card } from '../../interfaces/card-interface';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  name!:string
  card$!:Observable<Card>;

  constructor(private route:ActivatedRoute, private cardService:CardService) {}

  ngOnInit(){
    this.name = this.route.snapshot.paramMap.get('name') || '';
   //Snapshot hace una captura al parámetro tomado cuando se ingresa a la ruta.
   console.log(this.name)

   this.card$ = this.cardService.getOneCard(this.name);
   //Nos suscribimos a un observable "sin suscribirnos"
  }
}
