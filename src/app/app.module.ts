import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// forms ngModel attribute binding to forms
import { FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http'; // for http services for routes

import { AppComponent }  from './app.component';
import { UserComponent } from './components/user.components';
import { AboutComponent } from './components/about.components';
import { Routing } from './app.routing';
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, Routing ],
  declarations: [ AppComponent, UserComponent, AboutComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
