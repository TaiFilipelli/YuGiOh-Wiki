import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CardResponse } from '../interfaces/card-interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  BASE_URL = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';

  constructor(private http:HttpClient) { }

  getAllCards(offset=0, name:string | null){
    const params:any ={
      num:100,
      offset,
    }
    if(name) params.fname=name
    return this.http.get<CardResponse>(this.BASE_URL, {params}).pipe(
      map((res:any)=>res.data)
    );
  }

  getOneCard(name:string){
    return this.http.get<CardResponse>(this.BASE_URL+'?fname='+name).pipe(
      map((res:any)=>res.data[0])
    );
  }


}
