import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {
  userForm !: FormGroup;
  isValid : boolean = false;

  userList : any[] = [
    {age: 26,gender: "Female",id: 1,name: "Ragavi",verified: true},
    {age: 35,gender: "Male",id: 2,name: "Ram Prasath",verified: true},
    {age: 81,gender: "Male",id: 3,name: "Martin Scorsese",verified: true},
    {age: 44,gender: "Female",id: 4,name: "Sarah Godon",verified: true},
  ];
  filteredList : any[] = [];

  constructor(public fb : FormBuilder,private toastr:ToastrService) {
    this.formData();
  }

  ngOnInit(): void {
    this.filteredList = this.userList;
    
  }

  get formControls() { return this.userForm.controls }
  formData(){
    this.userForm = this.fb.group({
      'name' : ['' ,Validators.required],
      'age' : ['' ,Validators.required],
      'gender' : ['' ,Validators.required],
      'verified' : ['' ,Validators.requiredTrue],
    });
  }

  formSubmition(){
    this.isValid = true;
    if(this.userForm.valid) {
      const user = { ...this.userForm.value, id : this.userList.length+1 };
      this.userList.push(user);
      this.toastr.success('User Added Successfully');
      this.userForm.reset();
      this.isValid = false;
    }
  }

  filterByName(e:any) {
    const searchterm = e.target.value.toLowerCase().trim();
    if(searchterm==''){ this.userList = this.filteredList;return;}
    this.userList = this.filteredList.filter(o => {
      return Object.keys(o).some(k => {
        if(typeof o[k] === 'string') return o[k].toLowerCase().includes(searchterm);
      });
    }); 
    // this.userList = this.filteredList.filter(e=>{ return e.name.toLowerCase().includes(searchterm); });
  }
  deleteUser(id:number) {
    this.userList = this.userList.filter(e => e.id!=id);
    this.filteredList = this.userList;
  }
}
