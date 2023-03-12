import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComplaintPageComponent } from './pages/complaint-page/complaint-page.component';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { ListComplaintsComponent } from './components/list-complaints/list-complaints.component';
import { ComplaintsComponent } from './components/complaints/complaints.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { BrokerBackendService } from './services/brocker-backend/brocker-backend.service';
import { HttpClientModule } from '@angular/common/http';
import { ComplaintsService } from './services/complaints/complaints.service';

@NgModule({
  declarations: [
    AppComponent,
    ComplaintPageComponent,
    CardHeaderComponent,
    ListComplaintsComponent,
    ComplaintsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    HttpClientModule
  ],
  providers: [BrokerBackendService, ComplaintsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
