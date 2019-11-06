import { Component, OnInit } from '@angular/core';
import { TdTaskService } from "../shared/td-task.service";

@Component({
  selector: 'app-td-task-list',
  templateUrl: './td-task-list.component.html',
  styleUrls: ['./td-task-list.component.css']
})
export class TdTaskListComponent implements OnInit {
	taskArray=[];

  constructor(private taskService: TdTaskService) { }

  ngOnInit() {
  	this.taskService.getTask().subscribe(
                 (list) => {
                         this.taskArray = list.map( (item) => {
                                return {
                                        $key : item.key,
                                        ...item.payload.val()
                                }
                        })
                 });
  }

}
