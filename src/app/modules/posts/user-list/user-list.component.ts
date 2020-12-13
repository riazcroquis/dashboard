import { Component, EventEmitter, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service.service';
import { User } from 'src/app/modules/posts/user';
import { Router } from '@angular/router';
import { Output } from '@angular/core';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit {

  @Output() onClickUpdate = new EventEmitter();
  users: User[] = [];

  constructor(private _us: UserService, private router: Router ) {
  }

  ngOnInit() {
    this._us.findAll().subscribe(
      (response) => {
      this.users = response;
    });
  }

  deleteUser(id : number){
    if (confirm("Are you sure you want to remove this user?")) {
      this._us.deleteUser(id).subscribe( () => this._us.findAll());
      alert("User Removed!");
      window.location.reload(); 
    }
  }

  // emitUserId(id: any){
  //   this._us.getUser(id).subscribe( (response) => {
  //     this.onClickUpdate.emit(response);
  //     this.router.navigate(['../posts/edituser/:id'])
  //   } )
  // }

}
