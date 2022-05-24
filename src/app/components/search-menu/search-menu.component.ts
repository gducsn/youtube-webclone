import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, fromEvent, map, Observable, Observer, of, Subject, Subscription } from 'rxjs';
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



  constructor() { }



  mediaAddClass(){
    if(window.innerWidth < 654 && !this.media_input_boolean) {
      this.media_input$.subscribe(() => this.media_input_boolean = true)
    } else {this.media_input_boolean = false}
  }





  ngOnInit(): void {
  }




  add(){
    this.search_boolean$.subscribe(() => this.search_input_boolean = false)
  }
  remove() {
    this.search_boolean$.subscribe(() => this.search_input_boolean = true)
  }
 




}
