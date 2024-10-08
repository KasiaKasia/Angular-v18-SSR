import { Component } from '@angular/core';
import { ContactComponent } from '../../core/contact/contact.component';
import { TableComponent } from '../components/table/table.component';
import { InvoiceHeaderComponent } from '../components/invoice-header/invoice-header.component';

@Component({
  selector: 'app-preview-invoice',
  standalone: true,
  imports: [ContactComponent, TableComponent, InvoiceHeaderComponent],
  templateUrl: './preview-invoice.component.html',
  styleUrl: './preview-invoice.component.scss'
})
export class PreviewInvoiceComponent {

}
