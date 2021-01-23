import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor() {}
  authenticate(username, password) {
    return of(true).pipe(delay(500));
  }
}
