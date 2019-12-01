import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ HttpClientModule} from '@angular/common/http';
import{FreeapiServiceService} from './freeapi-service.service'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [FreeapiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
