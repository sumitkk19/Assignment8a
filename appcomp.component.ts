import { Component, OnInit, Input , EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-appcomp',
  templateUrl: './appcomp.component.html',
  styleUrls: ['./appcomp.component.css']
})
export class AppcompComponent implements OnInit {
  @Output() public MyEvent = new EventEmitter();

  public SendEvent()
  {
    this.MyEvent.emit("Hello from child")

  }
  constructor() { }

  ngOnInit() {
    
  }

}
