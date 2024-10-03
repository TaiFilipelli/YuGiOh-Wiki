import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marketName'
})
export class MarketNamePipe implements PipeTransform {

    markets=[
        {id:'amazon_price', name:'Amazon'},
        {id:'ebay_price', name:'eBay'},
        {id:'tcgplayer_price', name:'TCGPlayer'},
        {id:'coolstuffinc_price', name:'CoolStuffInc'},
        {id:'cardmarket_price', name:'CardMarket'}
    ]
  transform(value: string): string {
    const market = this.markets.find(market=>market.id===value);
    return market?.name || '';
  }

}