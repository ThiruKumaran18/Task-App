import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ListModule } from 'src/list/list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TabsModule,
    ListModule,
    ToastrModule.forRoot({
      timeOut : 1000,
      closeButton : true,
      easeTime : 400
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
