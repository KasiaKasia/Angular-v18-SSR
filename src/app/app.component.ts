import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core.module';
import { InvoiceModule } from './invoice/invoice.module';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ 
    NgClass, 
    RouterOutlet,
    CoreModule,
    InvoiceModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'invoice-generator';
  isMenuHidden = false;

  toggleMenu() {
    this.isMenuHidden = !this.isMenuHidden;
  }
}
