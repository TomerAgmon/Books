import { Observable } from 'rxjs';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Input() loading$: Observable<boolean>;
  @Output() submitLogin = new EventEmitter();

  public form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      username: [undefined, Validators.required],
      password: [undefined, [Validators.required]],
    });
  }

  submit(): void {
    if (this.form.valid) {
      const username = this.form.get('username').value;
      const password = this.form.get('password').value;
      this.submitLogin.emit({ username, password });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
