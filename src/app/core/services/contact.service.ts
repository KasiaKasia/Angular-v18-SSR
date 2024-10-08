import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Settings } from '../config/settings';
import { catchError, map, tap, throwError } from 'rxjs';
import { ResponseContact } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(public httpClient: HttpClient) {}

  getContact() {
    return this.httpClient
      .get<ResponseContact>(`${Settings.API_CONTACT}`)
      .pipe(
        map(res => res.respons),
        catchError((Error: any) => {
          return throwError(() => new Error('An issue occurred. Please try again later.'));
        }));
  }
}
