import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabPanelModule } from './tab-panel/tab-panel.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
