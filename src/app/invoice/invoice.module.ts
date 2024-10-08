import { NgModule } from '@angular/core';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { PreviewInvoiceComponent } from './preview-invoice/preview-invoice.component';
 

@NgModule({ 
  imports: [ 
    InvoiceRoutingModule,
    AddInvoiceComponent,
    PreviewInvoiceComponent
  ]
})
export class InvoiceModule {}
