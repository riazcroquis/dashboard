import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from 'src/app/services/user-service.service';
import { PostsComponent } from './posts.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';



@NgModule({
  declarations: [
    UserFormComponent,
    UserListComponent,
    PostsComponent,
    AddUserComponent,
    EditUserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    UserService
  ],
  exports: [
    UserFormComponent,
    UserListComponent,
    PostsComponent,
    AddUserComponent,
    EditUserComponent
  ]
})
export class PostsModule { }
