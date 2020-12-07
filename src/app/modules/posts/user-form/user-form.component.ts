import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user-service.service';
import { User } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _us: UserService) {

      this.user = new User();
  }

  onSubmit() {
    this._us.save(this.user).subscribe( () => {
        alert( `New user ${this.user.firstname} has been added` );
        this.gotoUserList();
      }
    )
  }

  gotoUserList() {
    this.router.navigate(['../posts/users']);
  }

  ngOnInit(): void {
  }

}
