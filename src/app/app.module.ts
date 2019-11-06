import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from "@angular/forms";

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../environments/environment";
import { TdTaskComponent } from './td-task/td-task.component';
import { TdTaskListComponent } from './td-task-list/td-task-list.component';
import { TdTaskService } from "./shared/td-task.service";

@NgModule({
  declarations: [
    AppComponent,
    TdTaskComponent,
    TdTaskListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 	ReactiveFormsModule,
   AngularFireModule.initializeApp(environment.firebaseConfig),
   AngularFireDatabaseModule
  ],
  providers: [TdTaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
