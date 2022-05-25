import { Component, OnInit } from '@angular/core';
import { fromEvent, of} from 'rxjs';
import { InsideMicroService } from 'src/app/services/nav-bar/inside-micro.service';
@Component({
  selector: 'app-search-menu',
  templateUrl: './search-menu.component.html',
  styleUrls: ['./search-menu.component.css'],

})
export class SearchMenuComponent implements OnInit {
  constructor(private service: InsideMicroService){}

  menuimp:boolean = true//this.service.menuimp;

  search_input_boolean: boolean = true;
  search_boolean$ = of(this.search_input_boolean)
  media_input_boolean: boolean = false;
  media_input$ = of(this.media_input_boolean);



  

  mediaAddClass(){
    if(window.innerWidth < 654 && !this.media_input_boolean) {
      this.media_input$.subscribe(() => this.media_input_boolean = true)
    } 
    else {this.media_input_boolean = false}
  }

  ngOnInit(): void {

  }

  eventfrom = fromEvent(document, 'click')
  add(){
    this.search_boolean$.subscribe(() => this.search_input_boolean = false)
  }
  remove() {
    this.search_boolean$.subscribe(() => this.search_input_boolean = true)
  }
 
menuInside() {
  if(!this.menuimp)
  {this.service.menuChange();
  this.service.menuimp$.subscribe((data:boolean) => this.menuimp = data)}
  else if (this.menuimp){
    this.service.menuimp$.next(false)
    this.service.menuimp$.subscribe((data:boolean) => this.menuimp = data)
  }


  document.onclick = (args: any) : void => {
  if(args.target.tagName === 'BODY') {
    this.service.remove_all$.next(false)
    this.service.remove_all$.subscribe((data:any) => this.service.remove_all = data)
    this.service.menuimp$.next(false)
    this.service.menuimp$.subscribe((data:boolean) => this.menuimp = data)
  }
} 
}



}
