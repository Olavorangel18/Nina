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

  formatDate(date: Date | undefined): string {
    if(date){
    let dataSplit = date.toString().split('-');
    const day = dataSplit[2][0] + dataSplit[2][1]
    const month = dataSplit[1]
    const year = dataSplit[0]
    
    return `${day}/${month}/${year}`;
    }
    return '';
  }
}
