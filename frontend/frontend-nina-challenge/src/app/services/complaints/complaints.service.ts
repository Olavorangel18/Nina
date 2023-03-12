import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BrokerBackendService } from '../brocker-backend/brocker-backend.service';

@Injectable({
  providedIn: 'root'
})
export class ComplaintsService {

  endpointComplains = '/complaints'

  constructor(private brokerBackend: BrokerBackendService
    ,private http: HttpClient) { 
  }

  getComplaints(): Observable<any> {
    return this.brokerBackend
        .connectInBackend(
          this.endpointComplains,
          'GET',
          undefined,
          this.getSimpleHeader()
        );
  }

  getComplaintsFilters(filters: String[]): Observable<any> {
    return this.brokerBackend
        .connectInBackend(
          this.increaseEndpointComplains(filters),
          'GET',
          filters,
          this.getSimpleHeader()
        );
  }

  getSimpleHeader() {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  increaseEndpointComplains(filters:String[]) {
    this.endpointComplains = '/complaints?'
    filters.forEach(filter => {
      this.endpointComplains += `${filter}&`;
    });
    return this.endpointComplains;
  }


}
