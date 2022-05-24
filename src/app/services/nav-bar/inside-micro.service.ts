import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsideMicroService {
remove_all = false;
aspetto = false;

remove_all$: any = new BehaviorSubject(this.remove_all)
  
aspetto$: any  = new BehaviorSubject(this.aspetto)

  changeValue() {
    this.remove_all$.next(!this.remove_all)
    this.aspetto$.next(!this.aspetto)
  }





  constructor() { }
}
