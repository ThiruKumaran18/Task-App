import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { ListRoutingModule } from './list-routing.module';
import { UserPageComponent } from './user-page/user-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimerComponent } from './timer/timer.component';



@NgModule({
  declarations: [
    TaskListComponent,
    UserPageComponent,
    TimerComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports : [TaskListComponent,
    UserPageComponent,
    TimerComponent]
})
export class ListModule { }
