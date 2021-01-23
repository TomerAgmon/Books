import { authLoading } from './../../../core/auth/store/auth.selectors';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { login } from 'src/app/core/auth/store/auth.actions';

@Component({
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeComponent implements OnInit {
  loading$;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.loading$ = this.store.pipe(select(authLoading));
  }

  submit($event) {
    this.store.dispatch(login($event));
  }
}
