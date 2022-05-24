import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InsideMicroService } from 'src/app/services/nav-bar/inside-micro.service';

@Component({
  selector: 'app-inside-menu',
  templateUrl: './inside-menu.component.html',
  styleUrls: ['./inside-menu.component.css']
})
export class InsideMenuComponent implements OnInit {
  aspetto: any = this.service.aspetto;
  remove_all: any = this.service.remove_all;
  secondo: boolean = false;
  third: boolean = false;
  fourth: boolean = false;
  constructor(public service: InsideMicroService) { }

  ngOnInit(): void {

  }
  aspettoChange() {
this.service.changeValue()
this.service.remove_all$.subscribe((data:any) => this.remove_all = data)
this.service.aspetto$.subscribe((data:any)=> this.aspetto = data)
  }

}

