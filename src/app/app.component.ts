import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/styles/app.component.sass']
})
export class AppComponent {
  public title:string;

    constructor() {
      this.title = 'My little poem app'
    }
}
