import { Component } from '@angular/core';
import { CurrentDateTime } from '../../models/current-date-time';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-invoice-header',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './invoice-header.component.html',
  styleUrl: './invoice-header.component.scss'
})
export class InvoiceHeaderComponent {
  protected readonly randomNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  protected readonly dateTimeGenerator = new CurrentDateTime().getCurrentDateTime();
}
