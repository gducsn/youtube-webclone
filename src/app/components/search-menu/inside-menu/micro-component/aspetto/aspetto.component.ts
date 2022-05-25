import { Component, OnInit } from '@angular/core';
import { InsideMicroService } from 'src/app/services/nav-bar/inside-micro.service';

@Component({
  selector: 'app-aspetto',
  templateUrl: './aspetto.component.html',
  styleUrls: ['./aspetto.component.css']
})
export class AspettoComponent implements OnInit {

  constructor(public micro: InsideMicroService ) { }

  ngOnInit(): void {
    
  }
back() {
  this.micro.remove_all$.next(false);
  this.micro.aspetto$.next(false)
  this.micro.remove_all$.subscribe((data:boolean) => this.micro.remove_all = data)
  this.micro.aspetto$.subscribe((data:boolean)=> this.micro.aspetto = data)
}

}
