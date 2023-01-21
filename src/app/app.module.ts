import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongPageComponent } from './song-page/song-page.component';
import { RouterModule } from '@angular/router';

import {HttpClientModule } from '@angular/common/http';//Connecting fEnd to bEnd

import { IssueService } from './issue.service';
import { HomeComponent } from './home/home.component';//Connecting fEnd to bEnd

@NgModule({
  declarations: [
    AppComponent,
    SongPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,//Connecting fEnd to bEnd
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'song-page', component:SongPageComponent},
    ])
  ],
  providers: [],//Connecting fEnd to bEnd
  bootstrap: [AppComponent]
})
export class AppModule { }
