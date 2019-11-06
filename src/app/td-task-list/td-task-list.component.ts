import { Component, OnInit } from '@angular/core';
import { TdTaskService } from "../shared/td-task.service";

@Component({
  selector: 'app-td-task-list',
  templateUrl: './td-task-list.component.html',
  styleUrls: ['./td-task-list.component.css']
})
export class TdTaskListComponent implements OnInit {
	taskArray=[];
  showDeletedMessage : boolean;
  searchText:string = "";

  constructor(private tdTaskService: TdTaskService) { }

  ngOnInit() {
  	this.tdTaskService.getTask().subscribe(
                 (list) => {
                         this.taskArray = list.map( (item) => {
                                return {
                                        $key : item.key,
                                        ...item.payload.val()
                                }
                        })
                 });
  }

  onDelete($key){
     if(confirm("Are you sure you want to delete this record?")){
        this.tdTaskService.deleteTask($key);
        this.showDeletedMessage = true;
        setTimeout(()=>this.showDeletedMessage=false, 3000)
       }
  }

  filterCondition(taskList){
     return taskList.taskName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 ;
  }
}
