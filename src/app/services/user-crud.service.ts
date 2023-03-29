import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserCrudService {
  url = 'http://localhost:3000/users';

  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get(this.url);
  }
  addUser(user: any) {
    return this.httpClient.post(this.url, user);
  }
  deleteUser(id: any) {
    return this.httpClient.delete(this.url + '/' + id);
  }
}
