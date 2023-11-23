import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { UserPageComponent } from './user-page/user-page.component';
import { TimerComponent } from './timer/timer.component';

const routes: Routes = [
  {path : 'task', component : TaskListComponent },
  {path : 'user-page', component : UserPageComponent },
  {path : 'timer', component : TimerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
