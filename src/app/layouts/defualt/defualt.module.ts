import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefualtComponent } from './defualt.component';
import { DasboardComponent } from 'src/app/modules/dasboard/dasboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { PostsModule } from 'src/app/modules/posts/posts.module';

@NgModule({
  declarations: [
    DefualtComponent,
    DasboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    PostsModule,
  ]
})
export class DefualtModule { }
