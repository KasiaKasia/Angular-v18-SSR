
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { computed } from '@angular/core';
import { Invoice } from '../models/invoice';

type InvoiceState = { invoices: Invoice[], isLoading: boolean; };

const initialState: InvoiceState = {
  invoices: [],
  isLoading: false,
};

export const InvoicesStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ invoices }) => ({
    numberOfInvoices: computed(() => invoices().length)
  })),
  withComputed(({ invoices }) => ({
    totalProducts: computed(() => {
     return invoices().reduce((sum, invoice) => sum + (invoice.count || 0), 0)
    })
  })),
  withMethods((store) => ({
    addInvoice(newInvoice: Invoice) {
      patchState(store, ({ invoices }) => ({ invoices: invoices.concat(newInvoice), isLoading: true }));
    }
  }))
);