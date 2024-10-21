import { Component } from '@angular/core';
import { CurrentDateTime } from '../../models/current-date-time';

@Component({
  selector: 'app-invoice-header',
  standalone: true,
  imports: [],
  templateUrl: './invoice-header.component.html',
  styleUrl: './invoice-header.component.scss'
})
export class InvoiceHeaderComponent {
  protected readonly randomNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  protected readonly dateTimeGenerator = new CurrentDateTime().getCurrentDateTime();
}
