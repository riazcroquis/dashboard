import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefualtComponent } from './layouts/defualt/defualt.component';
import { DasboardComponent } from './modules/dasboard/dasboard.component';
import { PostsComponent } from './modules/posts/posts.component';

const routes: Routes = [{
  path: '',
  component: DefualtComponent,
  children: [{
    path: '',
    component: DasboardComponent,
  },  
  {
    path: 'posts',
    component: PostsComponent,
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
