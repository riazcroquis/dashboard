import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from 'src/app/services/user-service.service';
import { PostsComponent } from './posts.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserFormComponent,
    UserListComponent,
    PostsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    UserService
  ],
  exports: [
    UserFormComponent,
    UserListComponent,
    PostsComponent,
  ]
})
export class PostsModule { }
