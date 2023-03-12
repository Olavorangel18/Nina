import { Component } from '@angular/core';
import { Complaints } from 'src/app/models/complaint/complaints.model';
import { ComplaintsService } from 'src/app/services/complaints/complaints.service';

@Component({
  selector: 'app-complaint-page',
  templateUrl: './complaint-page.component.html',
  styleUrls: ['./complaint-page.component.scss']
})
export class ComplaintPageComponent {
  listaComplaints: Complaints[] = [];
  listaComplaintsUnsolved: Complaints[] = [];
  listaComplaintsInProgress: Complaints[] = [];
  listaComplaintsSolved: Complaints[] = [];

  constructor(private complaintsService: ComplaintsService) {
    
  }

  ngOnInit() {
    this.getComplaints();
  }

  getComplaints() {
    this.complaintsService.getComplaints().subscribe((response: Complaints[]) => {
      response.forEach(complaint => {
        this.listaComplaints.push(new Complaints(
          complaint.id,
          complaint.place,
          complaint.at_moment,
          complaint.datetime,
          complaint.modified_at,
          complaint.created_at,
          complaint.description,
          complaint.situation,
          complaint.type[0]
        ));
      })
     
      this.listaComplaintsUnsolved = this.listaComplaints.filter(complaint => complaint.situation[0] === 'unsolved');
      this.listaComplaintsInProgress = this.listaComplaints.filter(complaint => complaint.situation[0] === 'in progress');
      this.listaComplaintsSolved = this.listaComplaints.filter(complaint => complaint.situation[0] === 'solved');
      
    }, error => {
      console.log(error);
    });
  }




}
