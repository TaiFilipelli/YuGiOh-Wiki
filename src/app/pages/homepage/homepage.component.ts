import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { CardService } from '../../services/card.service';
import { Card } from '../../interfaces/card-interface';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CardComponent, InfiniteScrollDirective, ReactiveFormsModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

  cards:Card[] = [];
  offset=0

  name = new FormControl('');

  constructor(private cardService:CardService) {}

  ngOnInit(){
    this.name.valueChanges.pipe(
      debounceTime(500)
    )
    .subscribe((res)=>{
      this.cards=[];
      this.searchCards(res)});
    this.searchCards(this.name.value);
  }
  
  onScroll(){
    this.offset += 100;
    this.searchCards()
  }
  
  searchCards(cardName:string | null=null){
    this.cardService.getAllCards(this.offset, cardName).subscribe(cards=>this.cards=[...this.cards,...cards]);
  }
}
