import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { InvoiceSignalService } from '../../invoice/signals/invoice-signal.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',

})
export class NavbarComponent {
  icon_left=false;
  @Output() toggleMenu = new EventEmitter<void>();
  constructor(public invoiceSignalService: InvoiceSignalService) { }
}
