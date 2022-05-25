import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsideMicroService {
remove_all: boolean = false;
aspetto: boolean = false;
lingua: boolean = false;
nazione: boolean = false;
menuimp: boolean = false;
restrizioni: boolean = false;

remove_all$: BehaviorSubject<boolean> = new BehaviorSubject(this.remove_all)
  
aspetto$: BehaviorSubject<boolean>  = new BehaviorSubject(this.aspetto)

lingua$: BehaviorSubject<boolean> = new BehaviorSubject(this.lingua)

nazione$: BehaviorSubject<boolean> = new BehaviorSubject(this.nazione)

menuimp$: BehaviorSubject<boolean> = new BehaviorSubject(this.menuimp)

restrizioni$: BehaviorSubject<boolean> = new BehaviorSubject(this.restrizioni)

  changeValue() {
    this.remove_all$.next(!this.remove_all)
    this.aspetto$.next(!this.aspetto)
  }

  linguaChange() {
    this.remove_all$.next(!this.remove_all)
    this.lingua$.next(!this.lingua)
  }

nazioneChange() {
  this.remove_all$.next(!this.remove_all)
  this.nazione$.next(!this.nazione)
}

menuChange(){
  this.menuimp$.next(!this.menuimp)
}
changeRes(){
  this.remove_all$.next(!this.remove_all)
  this.restrizioni$.next(!this.restrizioni)
}


  constructor() { }
}
