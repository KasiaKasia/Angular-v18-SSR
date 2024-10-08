import { Component, WritableSignal } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { InvoiceSignalService } from '../../signals/invoice-signal.service';
import { Invoice } from '../../models/invoice';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  rowsSignal: WritableSignal<Invoice[]> = this.invoiceSignalService.getRowsSignal();
  constructor(public invoiceSignalService: InvoiceSignalService) { }
 
}
