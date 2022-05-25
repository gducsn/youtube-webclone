import { Component, OnInit } from '@angular/core';
import { InsideMicroService } from 'src/app/services/nav-bar/inside-micro.service';


​
@Component({
  selector: 'app-restrizioni',
  templateUrl: './restrizioni.component.html',
  styleUrls: ['./restrizioni.component.css']
})
export class RestrizioniComponent implements OnInit {
  checked: boolean = false;

  change(){
    this.checked = !this.checked
  }

  
  constructor(private micro: InsideMicroService) { }
  
  back(){
    this.micro.restrizioni$.next(false)
    this.micro.remove_all$.next(false)
    this.micro.restrizioni$.subscribe((data:boolean) => this.micro.restrizioni = data)
    this.micro.remove_all$.subscribe((data:boolean) => this.micro.remove_all = data)
  }
  
  ngOnInit(): void {
    
  }

}
