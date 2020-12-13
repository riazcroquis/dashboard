import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user-service.service';
import { User } from '../user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})

export class EditUserComponent implements OnInit {

  public id: any;
  
  constructor(private _us: UserService, private _ar: ActivatedRoute,
    private _router: Router) {  
  }

  ngOnInit() {
    this._ar.paramMap.subscribe(params => {
      console.log(`inside edit form Oninit`)
      console.log(params.get('id'));
      this.id = params.get('id');
    })

    // this._us.getUser(this.id).subscribe(
    //   (response) => {
    //     this.data = response;
    //     console.log(this.data);
    //   })

  }

  public updateUser(userData: User){
    this._us.updateUser(this.id, userData).subscribe( () =>{
      alert("User Updated!");
      this.gotoUserList();
    })
  }

  cancel(){
    this._router.navigate(['../posts/users']);
  }

  gotoUserList() {
    this._router.navigate(['../posts/users']);
  }

  // public getUserData(id : any){
  //   this._us.getUser(id).subscribe(
  //     (response) => this.formData = response
  //   )
  // }

}
