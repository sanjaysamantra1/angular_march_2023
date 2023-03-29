import { Component, OnInit } from '@angular/core';
import { UserCrudService } from 'src/app/services/user-crud.service';

@Component({
  selector: 'app-user-crud',
  templateUrl: './user-crud.component.html',
  styleUrls: ['./user-crud.component.css'],
})
export class UserCrudComponent implements OnInit {
  users: any;

  constructor(private userCrudService: UserCrudService) {}

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.userCrudService.getUsers().subscribe((response) => {
      this.users = response;
    });
  }

  addUser(id: any,fname: any,lname: any,email: any,phone: any,address: any,sal: any) {
    const user  = {id,fname,lname,email,phone,address,sal};
    this.userCrudService.addUser(user).subscribe((response) => {
      alert('User added successfully!!!');
      this.getUsers();
    });
  }

  deleteUser(id:any){
    this.userCrudService.deleteUser(id).subscribe((response:any) => {
      alert('User'+id+ 'deleted successfully');
      this.getUsers();
    });
  }
}
