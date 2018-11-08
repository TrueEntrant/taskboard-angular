import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ListOfTasksService } from '../../shared/services/task.list.servise';
import { Task } from '../../shared/model/task.model';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

/** @title Input with a custom ErrorStateMatcher */
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public registerForm: FormGroup;
  // @Output() public submitEvt: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder, public tasks: ListOfTasksService) {}
  public matcher = new MyErrorStateMatcher();
  public list: Array<Task> = [];

  ngOnInit() {
    this.registerForm = this.fb.group(this.createFromGroup().controls);
    this.list = this.tasks.getListOfTasks();
  }

  get taskName() {
    return this.registerForm.get('taskName');
  }
  get todo() {
    return this.registerForm.get('todo');
  }
  get timeFrom() {
    return this.registerForm.get('timeFrom');
  }
  get timeTo() {
    return this.registerForm.get('timeTo');
  }

  private createFromGroup() {
    return new FormGroup({
      taskName: new FormControl('', []),
      todo: new FormControl('', []),
      timeFrom: new FormControl('', []),
      timeTo: new FormControl('', [])
    });
  }
}
