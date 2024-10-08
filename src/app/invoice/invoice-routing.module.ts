import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceComponent } from './invoice/invoice.component';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { PreviewInvoiceComponent } from './preview-invoice/preview-invoice.component';

const routes: Routes = [{
  path: '',
  component: InvoiceComponent,
  children: [
    {
      path: 'add-invoice',
      data: { title: 'Add Invoice' },
      component: AddInvoiceComponent
    }, {
      path: 'preview-invoice',
      data: { title: 'Invoice preview' },
      component: PreviewInvoiceComponent
    }
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule {}
