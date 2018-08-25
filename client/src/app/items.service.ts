import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpHeaders  } from '@angular/common/http';
import {Item} from "./item";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http:HttpClient) { }

  //retrieving ContactService
  getItems(){
    return this.http.get('http://localhost:3000/api/items');
  }

  //add Item to Card
  addItemToCart(newItem){
    var headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    console.log(newItem);
    return newItem;
    //return this.http.post('http://localhost:3000/api/contact', newItem, {headers:headers}).pipe();
  }
}
