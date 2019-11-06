import { Injectable } from '@angular/core';
import { FormControl , FormGroup, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable({
  providedIn: 'root'
})
export class TdTaskService {

	constructor(private firebase: AngularFireDatabase) { }
	taskList: AngularFireList<any>
	form = new FormGroup({
	    $key: new FormControl(null),
	    taskName: new FormControl('', Validators.required),
	    deadline: new FormControl('', Validators.required),
	         });
	  	getTask(){
	                 this.taskList = this.firebase.list('task');
	                 return this.taskList.snapshotChanges();
	         }

		insertTask(task){
	                 this.taskList.push({
	                         taskName: task.taskName,
	                         deadline: task.deadline
	                  });
	         }	
}
