import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComplaintPageComponent } from './pages/complaint-page/complaint-page.component';
import { CardHeaderComponent } from './components/card-header/card-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ComplaintPageComponent,
    CardHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
