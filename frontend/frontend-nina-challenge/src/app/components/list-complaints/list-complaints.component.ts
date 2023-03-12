import { Component, Input } from '@angular/core';
import { Complaints } from 'src/app/models/complaint/complaints.model';

@Component({
  selector: 'app-list-complaints',
  templateUrl: './list-complaints.component.html',
  styleUrls: ['./list-complaints.component.scss']
})
export class ListComplaintsComponent {
 @Input() listaComplaints: Complaints[] = [];
}
