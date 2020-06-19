import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { PzForumComponent } from './components/pz-forum/pz-forum.component';
import { PzForumItemComponent } from './components/pz-forum-item/pz-forum-item.component';
import { PzForumDetailsComponent } from './components/pz-forum-details/pz-forum-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PzForumComponent,
    PzForumItemComponent,
    PzForumDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
