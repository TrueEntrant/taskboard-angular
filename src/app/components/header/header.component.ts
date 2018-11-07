import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output()
  addTask: EventEmitter<boolean> = new EventEmitter();
 
  constructor() {}

  ngOnInit() {}

  public clickButton(data: boolean) {
    this.addTask.emit(data);
  }
}
