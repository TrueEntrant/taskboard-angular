import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit, AfterViewInit {
  @ViewChild('drawer')
  public drawer: MatDrawer;
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {}

  public clickHandler(data: boolean) {
    this.drawer.toggle();
  }
}
