import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service.service';
import { User } from 'src/app/modules/posts/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(private _us: UserService) {
   }

  ngOnInit() {
    this._us.findAll().subscribe(
      (response) => {
      this.users = response;
    });
  }

}
