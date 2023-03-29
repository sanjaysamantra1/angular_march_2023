import { Component, OnInit } from '@angular/core';
import { UserListService } from 'src/app/services/user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: any = [];
  searchText: string = '';

  constructor(private userListService: UserListService) {}

  ngOnInit(): void {}

  fetchUsers() {
    this.userListService.getAllUsers().subscribe((response) => {
      this.users = response;
    });
  }
}
