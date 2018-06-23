import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActionButtonComponent } from './action-button/action-button.component';
import { CountDisplayComponent } from './count-display/count-display.component';

@NgModule({
  declarations: [
    AppComponent,
    ActionButtonComponent,
    CountDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
