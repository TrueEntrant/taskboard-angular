import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasklistComponent } from './tasklist/tasklist.component';
import { TaskComponent } from './task/task.component';
import { TaskCoreComponent } from './core/core.component';

const Components = [TasklistComponent, TaskComponent, TaskCoreComponent];
const Exports = [TaskCoreComponent];

@NgModule({
  imports: [
    CommonModule
  ],
  exports: Exports,
  declarations: Components
})
export class TaskfieldModule { }
