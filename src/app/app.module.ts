import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopSectionComponent } from './components/top-section/top-section.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import {MaterializeModule} from "angular2-materialize";

@NgModule({
  declarations: [
    AppComponent,
    TopSectionComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
