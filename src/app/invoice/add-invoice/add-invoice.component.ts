import { Component } from '@angular/core';
import { BasicFormService } from '../services/basic-form.service';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { InvoiceSignalService } from '../signals/invoice-signal.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-add-invoice',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, NgIf, MatCardModule],
  templateUrl: './add-invoice.component.html',
  styleUrl: './add-invoice.component.scss'
})
export class AddInvoiceComponent {
  protected addForm: FormGroup = this.basicFormService.createForm();
  constructor(private basicFormService: BasicFormService,
    public invoiceSignalService: InvoiceSignalService,
    private router: Router) { }

  get items() {
    return this.addForm.controls["items"] as FormArray;
  }

  addItem(): void {
    this.basicFormService.addItem(this.addForm);
  }

  removeItem(index: number): void {
    this.basicFormService.removeItem(this.addForm, index);
  }

  onSubmit(): void {
    if (this.addForm.invalid) { return; }
    this.invoiceSignalService.setRowValue(this.items.value)
    this.router.navigate([`/invoice/preview-invoice`]);
  }
}
