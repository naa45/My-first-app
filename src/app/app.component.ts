import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html.html',
  styleUrls: ['./app.component.css']


})
export class AppComponent {
  showText= false;
  log = [] as any;

  OnToggleDetails() {
    // toggle dispaly
    this.showText = !this.showText;
    // to increase number of clicks when button is clicked
    // this.log.push(this.log.length +1);

    // using timestamp
    this.log.push(new Date())
  }



}
