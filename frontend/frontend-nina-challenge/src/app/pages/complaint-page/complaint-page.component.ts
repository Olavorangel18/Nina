import { Component,Inject } from '@angular/core';
import { Complaints } from 'src/app/models/complaint/complaints.model';
import { ComplaintsService } from 'src/app/services/complaints/complaints.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormControl} from '@angular/forms';
import { webSocket } from 'rxjs/webSocket';


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
  filters: String[] = [];

  constructor(private complaintsService: ComplaintsService,
              private _snackBar: MatSnackBar,
              private dialog: MatDialog,
              ) {}

  ngOnInit() {
    this.getComplaints();
    webSocket('ws://localhost:8080').subscribe(
      (message) => {
        this.openSnackBar(`Received message:${JSON.stringify(message)}`,'');
      },
      (error) => {
        this.openSnackBar("Erro de conexão com o websocket",'');
      },
      () => {
        console.log('WebSocket connection closed.');
      }
    );
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
      this.openSnackBar("Ocorreu um problema com a conexão do servidor", '');
    });
  }

  getComplaintsFilter(filters: String[]) {
    
    this.listaComplaints = [];
    this.listaComplaintsUnsolved = [];
    this.listaComplaintsInProgress = [];
    this.listaComplaintsSolved = [];

    this.complaintsService.getComplaintsFilters(filters).subscribe((response: Complaints[]) => {
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
      this.openSnackBar("Ocorreu um problema com a conexão do servidor", '');
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentFilter, {
      data: {filters: this.filters}});
    dialogRef.afterClosed().subscribe(result => {
      this.getComplaintsFilter(result)
    });
  }
}

@Component({
  selector: 'dialog-content-filter',
  templateUrl: 'dialog-content-filter.html',
})
export class DialogContentFilter {
  constructor(
    public dialogRef: MatDialogRef<DialogContentFilter>,
    @Inject(MAT_DIALOG_DATA) public data: ComplaintPageComponent,
  ) {}
  place = new FormControl('');
  type = new FormControl('');  
  active = new FormControl('');  
  on(){
    while(this.data.filters.length > 0) {
      this.data.filters.pop();
  }
   if(this.place.value) this.data.filters.push(`place=${this.place.value}`)
   if(this.type.value) this.data.filters.push(`type=${this.type.value}`)
   if(this.active.value) this.data.filters.push(`at_moment=${this.active.value}`)
   else this.data.filters.push(`at_moment=false`)
  }
}
