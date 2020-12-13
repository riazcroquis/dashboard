import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user-service.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})

export class UserFormComponent implements OnInit {

  @Output() onSubmit = new EventEmitter();
  @Output() onCancel = new EventEmitter();

  userForm: any;
  id: any;
  isEditMode: boolean = false;
  
  constructor(
    private _fb: FormBuilder,
    private _ar: ActivatedRoute,
    private _us: UserService,
    ) {
      //this.user = new User();
  }

  get name() 
  { return <AbstractControl>this.userForm.get( 'name' ); }
  get department() 
  { return <AbstractControl>this.userForm.get( 'department' ); }
  get email() 
  { return <AbstractControl>this.userForm.get( 'email' ); }
  get age() 
  { return <AbstractControl>this.userForm.get( 'age' ); }

  ngOnInit() {
    
    this._ar.paramMap.subscribe(params => {
          console.log(params.get('id'));
          this.id = params.get('id');
          if(this.id !=undefined){
            this.isEditMode = true;
          } 
        })
    
    this.userForm = this._fb.group({
      name: new FormControl( '', [ 
        Validators.required,
        Validators.pattern( '^[A-Za-z ]+$' )
      ]),
      department: new FormControl( '', [
        Validators.required,
        Validators.pattern( '^[A-Za-z ]+$' ),
      ]),
      email: new FormControl( '', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')
      ] ),
      age: new FormControl( '', [
        Validators.required,
        Validators.pattern( '^[0-9]+$' )
      ] )
    });

    if(this.isEditMode){
      console.log(`inside user form  Oninit if statement`)
      this._us.getUser(this.id)
      .pipe(first()).subscribe(x => {
        this.userForm.patchValue(x);
        console.log(x);
      });
    }

  }

  submit(){
    if(this.userForm.valid){
      this.onSubmit.emit(this.userForm.value);
    }
  }

  cancel(){
    this.onCancel.emit();
  }

  // onSubmit() {
  //   this._us.save(this.user).subscribe( () => {
  //       alert( `New user ${this.user.name} has been added` );
  //       this.gotoUserList();
  //     }
  //   )
  // }

  // gotoUserList() {
  //   this.router.navigate(['../posts/users']);
  // }

}
