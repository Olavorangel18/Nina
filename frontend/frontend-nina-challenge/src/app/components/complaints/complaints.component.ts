import { Component, Input } from '@angular/core';
import { Complaints } from 'src/app/models/complaint/complaints.model';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.scss']
})
export class ComplaintsComponent {
  @Input() complaint: Complaints | undefined;
  constructor() {
    this.complaint = new Complaints(
      'fd50bd52-b008-4c8a-9256-e4a6112538b0', 
      'beach', 
      false,
       '2020-08-21T18:35:27.387Z', 
       '2020-09-30T12:00:27.094Z', 
       '2021-12-22T08:21:22.779Z', 
       'Complaint 1', 
       [
        "unsolved"
       ], 
       'noise');
   }

  ngOnInit(): void {
  }
}
