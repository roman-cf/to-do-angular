import { Component, OnInit } from '@angular/core';
import { TdTaskService  } from "../shared/td-task.service";

@Component({
  selector: 'app-td-task',
  templateUrl: './td-task.component.html',
  styleUrls: ['./td-task.component.css']
})
export class TdTaskComponent implements OnInit {

constructor(private tdTaskService: TdTaskService) { }
	submitted: boolean;
	formControls = this.tdTaskService.form.controls;
	showSuccessMessage: boolean;

  ngOnInit() {
  }


onSubmit(){
	this.submitted = true;
	if(this.tdTaskService.form.valid){
         if(this.tdTaskService.form.get("$key").value == null ){
                 // insert
          	this.tdTaskService.insertTask(this.tdTaskService.form.value);
          	this.showSuccessMessage=true;
          	setTimeout(()=> this.showSuccessMessage=false,3000);
            this.submitted = false;
            this.tdTaskService.form.reset();
         } else {
                 //update
         }
    }     
 }
}
