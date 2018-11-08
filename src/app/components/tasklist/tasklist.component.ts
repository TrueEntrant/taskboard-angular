import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ListOfTasksService } from '../../shared/services/task.list.servise';
import { Task } from '../../shared/model/task.model';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit, AfterViewInit {
  public todo: Array<Task> = [];
  public inprogress: Array<Task> = [];
  public done: Array<Task> = [];

  constructor(private taskList: ListOfTasksService) {}

  ngOnInit() {}
  ngAfterViewInit() {
    const list = this.taskList.getListOfTasks();
    list.forEach(item => {
      switch (item.type) {
        case 'todo': {
          this.todo.push(item);
          break;
        }
        case 'inprogress': {
          this.inprogress.push(item);
          break;
        }
        case 'done': {
          this.done.push(item);
          break;
        }
        default:
          break;
      }
    });
  }
}
