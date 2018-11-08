import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListOfTasksService {
  public List = [
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

  public getListOfTasks() {
    return this.List;
  }
}
