import { Component } from '@angular/core';
import { Complaints } from 'src/app/models/complaint/complaints.model';

@Component({
  selector: 'app-complaint-page',
  templateUrl: './complaint-page.component.html',
  styleUrls: ['./complaint-page.component.scss']
})
export class ComplaintPageComponent {
  listaComplaints = [];
  listaComplaintsUnsolved = [];
  listaComplaintsInProgress = [];
  listaComplaintsSolved = [];
}
