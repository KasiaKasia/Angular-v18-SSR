import { inject, Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BasicFormService {
  private formBuilder = inject(FormBuilder);

  createForm(): FormGroup {
    return this.formBuilder.group({
      items: this.formBuilder.array([this.createItem()])
    },{ updateOn:  'submit' });
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      count: ['', [Validators.required, Validators.min(1), Validators.max(100), Validators.pattern('^[0-9]+$')]],
      price: ['', [Validators.required, Validators.min(1), Validators.max(1000000), Validators.pattern('^[0-9]+$')]],
    });
  }

  getItemsArray(form: FormGroup): FormArray {
    return form.get('items') as FormArray;
  }

  addItem(form: FormGroup): void {
    const formArray = this.getItemsArray(form);
    formArray.push(this.createItem());
  }

  removeItem(form: FormGroup, index: number): void {
    const formArray = this.getItemsArray(form);
    formArray.removeAt(index)
  }
}
