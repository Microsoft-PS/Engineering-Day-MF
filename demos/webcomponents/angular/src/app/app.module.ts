import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OperationsComponent } from './components/operations.component';

@NgModule({
  declarations: [
    AppComponent,
    OperationsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [OperationsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
