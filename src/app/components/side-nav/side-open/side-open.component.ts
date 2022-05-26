import { Component, OnInit } from '@angular/core';
import { InsideMicroService } from 'src/app/services/nav-bar/inside-micro.service';
import { first, fourObj, second, third, twoEl } from '../mockup/firstSection';

@Component({
  selector: 'app-side-open',
  templateUrl: './side-open.component.html',
  styleUrls: ['./side-open.component.css']
})
export class SideOpenComponent implements OnInit {
  firstObj = first;
  secondObj = second;
  thirdObj = third;
  twoEl = twoEl;
  fourObj = fourObj;
 
  constructor(private micro: InsideMicroService) { }

  sidebar: boolean = true

  ngOnInit(): void {
    this.micro.sidebar$.subscribe(data => this.sidebar = data)
  }

}
