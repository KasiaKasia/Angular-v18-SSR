import { Component, inject, output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { InvoiceSignalService } from '../../invoice/signals/invoice-signal.service';
import { InvoicesStore } from '../../invoice/signal-store/invoice-signal-store.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  protected icon_left = false;
  protected toggleMenu = output(); 
  readonly storeInvoices = inject(InvoicesStore);

  constructor(public invoiceSignalService: InvoiceSignalService) { }
}
