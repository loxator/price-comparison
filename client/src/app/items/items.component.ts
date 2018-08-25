import { Component, OnInit } from '@angular/core';
import {ItemsService} from "../items.service";
import {Item} from "../item";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  providers:[ItemsService]
})
export class ItemsComponent implements OnInit {
  items:Item[];
  item:Item;


  constructor(private itemServie:ItemsService) { }

  addToCart(newItem){
    console.log(newItem);
  }

  ngOnInit() {
    this.itemServie.getItems()
      .subscribe((data:Item[]) => this.items = data);
  }

}
