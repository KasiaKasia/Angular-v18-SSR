import { Component, inject } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactService = inject(ContactService);
  contact$ = this.contactService.getContact();
} 
