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
  this.micro.changeValue()
  this.micro.remove_all$.subscribe((data:any) => this.micro.remove_all = data)
  this.micro.aspetto$.subscribe((data:any)=> this.micro.aspetto = data)
}

}
