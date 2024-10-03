import { Component, Input } from '@angular/core';
import { Card } from '../../interfaces/card-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() card!:Card;
  //Le aseguramos a TS que card llegará

  constructor(private router:Router){}
  
  goToDetails(){
    this.router.navigate(['/card/'+this.card.name]);
  }
}
