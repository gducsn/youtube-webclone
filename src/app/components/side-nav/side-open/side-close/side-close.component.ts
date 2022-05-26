import { Component, OnInit } from '@angular/core';
import { closeSide } from '../../mockup/firstSection';

@Component({
  selector: 'app-side-close',
  templateUrl: './side-close.component.html',
  styleUrls: ['./side-close.component.css']
})
export class SideCloseComponent implements OnInit {
  closeSideData = closeSide;

  constructor() { }

  ngOnInit(): void {
  }

}
