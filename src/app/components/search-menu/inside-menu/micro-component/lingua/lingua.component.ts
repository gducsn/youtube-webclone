import { Component, OnInit,  } from '@angular/core';
import { InsideMicroService } from 'src/app/services/nav-bar/inside-micro.service';

@Component({
  selector: 'app-lingua',
  templateUrl: './lingua.component.html',
  styleUrls: ['./lingua.component.css']
})
export class LinguaComponent implements OnInit {


  list: string[] =[
    "Mandarin Chinese",
    "Spanish",
    "English",
    "Hindi/Urdu",
    "Arabic",
    "Bengali",
    "Portuguese",
    "Russian",
    "Japanese",
    "German",
    "Javanese",
    "Punjabi",
    "Wu",
    "French",
    "Telugu",
    "Vietnamese",
    "Marathi",
    "Korean",
    "Tamil",
    "Italian",
    "Turkish",
    "Cantonese/Yue"
  ]


  constructor(private micro: InsideMicroService) { }

  changeValue() {
    this.micro.remove_all$.next(false)
    this.micro.lingua$.next(false)
    this.micro.remove_all$.subscribe((data:boolean) => this.micro.remove_all = data)
  this.micro.lingua$.subscribe((data:boolean)=> this.micro.lingua = data)
  }
  
  ngOnInit(): void {

  }


}

