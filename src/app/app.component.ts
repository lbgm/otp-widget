import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'otp-widget';

  otp: string = '';

  filled (arg: boolean) {
    void 0;
  }
}
