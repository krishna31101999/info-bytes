import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
@Component({
  selector: 'app-flipflops',
  templateUrl: './flipflops.component.html',
  styleUrls: ['./flipflops.component.css']
})
export class FlipflopsComponent implements OnInit {
mflipflop
  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.getMflipflops().subscribe(d=>{
      this.mflipflop=d;
    })
  }
  buy(){


  }
  additem()
  {
    
  }
}
