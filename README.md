# OtpWidget
OTP code input widget for Angular

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.0.

![image](https://user-images.githubusercontent.com/92580505/212340376-892b9ee4-1cd3-4e38-bd2b-eed867c50221.png)

## install
```sh
npm i @lbgm/otp-widget
```

## Props
  Type:
   ```ts
   type TGap = "otp-gap-1" | "otp-gap-2" | "otp-gap-3" | "otp-gap-4" | "otp-gap-5" | "otp-gap-6" | "otp-gap-7" | "otp-gap-8" | "otp-gap-9" | "otp-gap-10" | "otp-gap-11" | "otp-gap-12" | "otp-gap-13" | "otp-gap-14" | "otp-gap-15" | "otp-gap-16" | "otp-gap-17" | "otp-gap-18" | "otp-gap-19" | "otp-gap-20" | "otp-gap-21" | "otp-gap-22" | "otp-gap-23" | "otp-gap-24" | "otp-gap-25" | "otp-gap-26" | "otp-gap-27" | "otp-gap-28" | "otp-gap-29" | "otp-gap-30" | "otp-gap-31" | "otp-gap-32" | "otp-gap-33" | "otp-gap-34" | "otp-gap-35" | "otp-gap-36" | "otp-gap-37" | "otp-gap-38" | "otp-gap-39" | "otp-gap-40" | "otp-gap-41" | "otp-gap-42" | "otp-gap-43" | "otp-gap-44" | "otp-gap-45" | "otp-gap-46" | "otp-gap-47" | "otp-gap-48";
   ```
   Defaults values & types
   ```js
    @Input() childs?: number = 4;
    @Input() type?: "number" | "text" = "number";
    @Input() placeholder?: string = '';
    @Input() gap?: TGap = "otp-gap-16";
   ```

 ## Events
 `code`: sends value filled as `string`;

 `filled`: when all inputs are filled;

## Use
 `app.module.ts` :
 ```ts
  //...
  import { OtpWidgetModule } from '@lbgm/otp-widget';

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
 ```

 `app.component.html` :
 ```html
    <otp-widget (filled)="filled($event)" (code)="otp = $event"></otp-widget>
 ```

 ![image](https://user-images.githubusercontent.com/92580505/212340494-fa18c90b-cb68-4813-817d-e188343719e4.png)
