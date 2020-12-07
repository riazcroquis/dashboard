import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefualtComponent } from './layouts/defualt/defualt.component';
import { DasboardComponent } from './modules/dasboard/dasboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { UserFormComponent } from './modules/posts/user-form/user-form.component';
import { UserListComponent } from './modules/posts/user-list/user-list.component';

const routes: Routes = [
  { path: '', component: DefualtComponent,
    children: [
    { path: '', component: DasboardComponent},  
    { path: 'posts', component: PostsComponent,
      children: [
        { path: 'users', component: UserListComponent},
        { path: 'adduser', component: UserFormComponent},
    ]
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
