import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefualtComponent } from './layouts/defualt/defualt.component';
import { DasboardComponent } from './modules/dasboard/dasboard.component';
import { AddUserComponent } from './modules/posts/add-user/add-user.component';
import { EditUserComponent } from './modules/posts/edit-user/edit-user.component';
import { PostsComponent } from './modules/posts/posts.component';
import { UserListComponent } from './modules/posts/user-list/user-list.component';

const routes: Routes = [
  { path: '', component: DefualtComponent,
    children: [
    { path: '', component: DasboardComponent},  
    { path: 'posts', component: PostsComponent,
      children: [
        { path: 'users', component: UserListComponent},
        { path: 'adduser', component: AddUserComponent},
        { path: 'edituser/:id', component: EditUserComponent}
    ]
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
