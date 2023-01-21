import { Component } from '@angular/core';

//js
declare var MyFunction: ( ) => any;

@Component({
  selector: 'app-song-page',
  templateUrl: './song-page.component.html',
  styleUrls: ['./song-page.component.css']
})
//js
export class SongPageComponent {
  CallMyFunction(){
    MyFunction();
  }

}

