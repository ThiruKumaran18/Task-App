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
    {age: 26,gender: "female",id: 1,name: "Ragavi",verified: true},
    {age: 35,gender: "female",id: 2,name: "Ram Prasath",verified: true},
  ];

  constructor(public fb : FormBuilder,private toastr:ToastrService) {
    this.formData();
  }

  ngOnInit(): void {
    
  }

  get formControls() { return this.userForm.controls }
  formData(){
    this.userForm = this.fb.group({
      'name' : ['' ,Validators.required],
      'age' : ['' ,Validators.required],
      'gender' : ['' ,Validators.required],
      'verified' : ['' ,Validators.required],
    });
  }

  formSubmition(){
    this.isValid = true;
    if(this.userForm.valid) {
      const user = { ...this.userForm.value, id : this.userList.length+1 };
      this.userList.push(user);
      this.toastr.success('User Add Successfully');
      this.userForm.reset();
      this.isValid = false;
    }
  }

  filterByName(e:any) {
    const searchterm = e.target.value.toLowerCase();
    const data = this.userList.filter(e=>e.name.includes(searchterm));
  }
  deleteUser(id:number) {
    this.userList = this.userList.filter(e => e.id!=id);
  }
}
