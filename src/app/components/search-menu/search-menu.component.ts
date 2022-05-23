import { Component, OnInit} from '@angular/core';
import { of } from 'rxjs';
@Component({
  selector: 'app-search-menu',
  templateUrl: './search-menu.component.html',
  styleUrls: ['./search-menu.component.css']
})
export class SearchMenuComponent implements OnInit {


  search_input_boolean: boolean = true;
  search_boolean$ = of(this.search_input_boolean)

  constructor() { }

  ngOnInit(): void {
  }

  add(){
    this.search_boolean$.subscribe(() => this.search_input_boolean = false)
  }
  remove() {
    this.search_boolean$.subscribe(() => this.search_input_boolean = true)
  }
 
}
