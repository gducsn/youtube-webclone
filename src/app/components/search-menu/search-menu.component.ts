import { Component, OnInit } from '@angular/core';
import { of} from 'rxjs';
@Component({
  selector: 'app-search-menu',
  templateUrl: './search-menu.component.html',
  styleUrls: ['./search-menu.component.css'],

})
export class SearchMenuComponent implements OnInit {


  search_input_boolean: boolean = true;
  search_boolean$ = of(this.search_input_boolean)
  media_input_boolean: boolean = false;
  media_input$ = of(this.media_input_boolean);

  menu_inside_boolean: boolean = false;
  menu_inside$ = of(this.menu_inside_boolean)
  constructor() { }

  mediaAddClass(){
    if(window.innerWidth < 654 && !this.media_input_boolean) {
      this.media_input$.subscribe(() => this.media_input_boolean = true)
    } 
    else {this.media_input_boolean = false}
  }

  ngOnInit(): void {

  }


  add(){
    this.search_boolean$.subscribe(() => this.search_input_boolean = false)
  }
  remove() {
    this.search_boolean$.subscribe(() => this.search_input_boolean = true)
  }
 
menuInside() {
  if(!this.menu_inside_boolean) {
    this.menu_inside$.subscribe(() => this.menu_inside_boolean = true)
  } else (this.menu_inside$.subscribe(() => this.menu_inside_boolean = false))
}



}
