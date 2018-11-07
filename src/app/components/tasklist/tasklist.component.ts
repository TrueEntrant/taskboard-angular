import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {
  public items = [
    {
      type: 'todo',
      creator: 'Admin',
      pinedto: 'Vasya',
      description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
    A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
    bred for hunting.`
    },
    {
      type: 'done',
      creator: 'Admin',
      pinedto: 'Vasya',
      description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
    A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
    bred for hunting.`
    },
    {
      type: 'todo',
      creator: 'Admin',
      pinedto: 'Vasya',
      description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
    A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
    bred for hunting.`
    },
    {
      type: 'inprogress',
      creator: 'Admin',
      pinedto: 'Vasya',
      description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
    A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
    bred for hunting.`
    },
    {
      type: 'archive',
      creator: 'Admin',
      pinedto: 'Vasya',
      description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
    A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
    bred for hunting.`
    }
  ];

  constructor() {}

  ngOnInit() {}
}
