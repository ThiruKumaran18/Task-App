import { Component } from '@angular/core';
import * as $ from 'jquery'


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  taskList !: any[];
  constructor() {

  }

  ngOnInit(): void {
    this.taskList = [
      {id:'1','selected' : false, 'name' : 'E-commerce Web' , 'status' : '50' ,'due_date' : '2019-05-23' },
      {id:'2','selected' : false, 'name' : 'Android App' , 'status' : '20' ,'due_date' : '2019-09-18' },
      {id:'3','selected' : false, 'name' : 'Logo Design' , 'status' : '45' ,'due_date' : '2019-04-09' },
      {id:'4','selected' : false, 'name' : 'Java design' , 'status' : '30' ,'due_date' : '2019-10-14' }
    ];
  }

  selectAll(){
    const checked = $('#selectAll').is(':checked') ? true : false;
    this.taskList.forEach((el:any) => {
      $('#li_'+el.id).prop('checked',checked);
      el.selected = checked;
    });
  }
  selectOne(id:number){
    const checked = $('#li_'+id).is(':checked') ? true : false;
    this.taskList.forEach((el:any) => {
      if(id == el.id){
        el.selected = checked;
      }
    });
    const isAllSelected = this.taskList.every(e => e.selected==true); 
    $('#selectAll').prop('checked',isAllSelected);
  }
}
