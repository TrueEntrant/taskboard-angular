import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit, AfterViewInit {
  @ViewChild('drawer') public drawer: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  public clickHandler(data: boolean) {
    console.log('parent trigered', data);
    // this.rd.invokeElementMethod(this.drawer.nativeElement, 'toggle');
    this.drawer.toggle();
  }
}
