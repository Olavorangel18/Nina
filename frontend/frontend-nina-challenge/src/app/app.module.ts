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
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { DialogContentFilter } from './pages/complaint-page/complaint-page.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ComplaintPageComponent,
    CardHeaderComponent,
    ListComplaintsComponent,
    ComplaintsComponent,
    DialogContentFilter
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [BrokerBackendService, ComplaintsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
