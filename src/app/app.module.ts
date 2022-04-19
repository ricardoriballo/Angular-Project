import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiModule } from './api/api.module';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';


@NgModule({
  declarations: [	
    AppComponent,

   ],
  imports: [
    BrowserModule, ApiModule, HttpClientModule,  SharedModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }