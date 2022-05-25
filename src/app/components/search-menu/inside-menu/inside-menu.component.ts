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
  lingua: boolean = this.service.lingua;
  nazione: boolean = this.service.nazione;
  restrizioni: boolean = this.service.restrizioni
  constructor(public service: InsideMicroService) { }

  ngOnInit(): void {

  }
  aspettoChange() {
this.service.changeValue()
this.service.remove_all$.subscribe((data:boolean) => this.remove_all = data)
this.service.aspetto$.subscribe((data:boolean)=> this.aspetto = data)
  }

  linguaChange(){
    this.service.linguaChange();
    this.service.remove_all$.subscribe((data:boolean) => this.remove_all = data)
    this.service.lingua$.subscribe((data:boolean)=> this.lingua = data)
  }

  nazioneChange() {
    this.service.nazioneChange()
    this.service.remove_all$.subscribe((data:boolean) => this.remove_all = data);
    this.service.nazione$.subscribe((data:boolean) => this.nazione = data)
  }

  changeRest() {
    this.service.changeRes();
    this.service.remove_all$.subscribe((data:boolean) => this.remove_all = data);
    this.service.restrizioni$.subscribe((data:boolean) => this.restrizioni = data)
  }

}

