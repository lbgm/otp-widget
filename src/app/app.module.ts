import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OtpWidgetModule } from 'otp-widget';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OtpWidgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
