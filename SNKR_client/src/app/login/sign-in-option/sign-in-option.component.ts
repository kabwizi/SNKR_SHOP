import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  updateUserInformationAction,
  showOrHideLoginPopUpAction,
} from 'src/app/ngrx/actions/login.actions';

@Component({
  selector: 'app-sign-in-option',
  templateUrl: './sign-in-option.component.html',
})
export class SignInOptionComponent implements OnInit {
  public signInForm: FormGroup | undefined;
  constructor(private formBuilder: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }
  submitFormFn() {
    if (this.signInForm?.valid) {
      this.store.dispatch(
        updateUserInformationAction({
          email: this.signInForm?.value['email'],
          firstName: this.signInForm?.value['firstName'],
          lastName: this.signInForm?.value['lastName'],
          password: this.signInForm?.value['password'],
        })
      );
      this.store.dispatch(showOrHideLoginPopUpAction({ value: false }));
    }
  }
}
