import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output()
  addTask: EventEmitter<boolean> = new EventEmitter();
  @ViewChild('backgr')
  backgr: ElementRef;
  constructor() {}

  ngOnInit() {}

  public clickButton(data: boolean) {
    this.backgr.nativeElement.style.display = 'none';
    this.addTask.emit(data);
  }
}
