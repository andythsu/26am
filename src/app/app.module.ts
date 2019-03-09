import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopupComponent } from './popup/popup.component';
import { PopupService } from './popup/popup.service';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DaycounterModule } from './daycounter/daycounter.module';
import { InputformModule } from './inputform/inputform.module';
import { ListModule } from './list/list.module';

@NgModule({
   declarations: [
      AppComponent,
      PopupComponent
   ],
   imports: [
      AppRoutingModule,
      BrowserModule,
      BrowserAnimationsModule,
      FontAwesomeModule,
      DaycounterModule,
      InputformModule,
      ListModule
   ],
   providers: [
      PopupService
   ],
   bootstrap: [
      AppComponent
   ],
   entryComponents: [
      PopupComponent
   ],
   schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
