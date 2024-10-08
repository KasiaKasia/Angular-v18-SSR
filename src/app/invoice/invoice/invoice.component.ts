import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './invoice.component.html',
})
export class InvoiceComponent {}
