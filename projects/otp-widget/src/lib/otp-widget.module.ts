import { NgModule } from '@angular/core';
import { OtpWidgetComponent } from './otp-widget.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    OtpWidgetComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OtpWidgetComponent
  ],
  providers: [
    {
      provide: Window,
      useValue: window
    }
  ]
})
export class OtpWidgetModule { }
