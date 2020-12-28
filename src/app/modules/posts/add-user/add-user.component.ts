import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user-service.service';
import { User } from '../user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  user: User;
  
  constructor(private _us: UserService, private router: Router) { 
    this.user = new User();
  }

  ngOnInit(): void {
  }

  public addUser(userData: User){
    this.user = userData;
    this._us.save(this.user).subscribe( () => {
      alert( `New user ${this.user.name} has been added` );
      this.gotoUserList();
    } )
  
  }

  gotoUserList() {
    this.router.navigate(['../posts/users']);
  }

  cancel(){
    this.router.navigate(['../posts/users'])
  }
}
