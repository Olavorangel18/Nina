import { Component, Input } from '@angular/core';
import { Complaints } from 'src/app/models/complaint/complaints.model';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.scss']
})
export class ComplaintsComponent {
  @Input() complaint: Complaints | undefined;
  constructor() {}


  ngOnInit(): void {
  }
}
