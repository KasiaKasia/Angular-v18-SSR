import { Component, DestroyRef, inject } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  destroyRef = inject(DestroyRef);
  contactService = inject(ContactService);
  contact$ = this.contactService.getContact().pipe(
    takeUntilDestroyed(this.destroyRef));
} 
