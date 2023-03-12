import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.scss']
})
export class CardHeaderComponent {
  @Input() type: string | undefined;
  @Input() lenght: string | undefined;
  @Input() color: string | undefined;
  @Input() boxShadow: string | undefined;
}
