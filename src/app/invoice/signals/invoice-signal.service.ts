import { computed, Injectable, signal, WritableSignal } from '@angular/core';
import { Invoice } from '../models/invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceSignalService {

  rowsSignal: WritableSignal<Invoice[]> = signal([]);

  totalSignal = computed(() => {
    return this.rowsSignal().reduce((total, row) => total + (row.count * row.price), 0);
  });

  setRowValue(form: Invoice[]) {
    this.rowsSignal.update(value => value.concat(form));
  }

  getRowsSignal(): WritableSignal<Invoice[]> {
    return this.rowsSignal;
  }

  getTotalSignal() {
    return this.totalSignal;
  }
}
