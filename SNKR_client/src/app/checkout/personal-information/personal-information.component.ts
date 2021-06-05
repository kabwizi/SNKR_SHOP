import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { loginUserDataSelector } from 'src/app/ngrx/selectors/login.selectors';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
})
export class PersonalInformationComponent implements OnInit, OnDestroy {
  public personalInformationForm: FormGroup | undefined;
  public subscription: Subscription | undefined;
  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscription = this.store
      .select(loginUserDataSelector)
      .subscribe((user) => {
        this.personalInformationForm = this.formBuilder.group({
          firstName: [user.firstName, Validators.required],
          lastName: [user.lastName, Validators.required],
          email: [user.lastName, [Validators.required, Validators.email]],
          phoneNumber: [''],
          address: this.formBuilder.group({
            street: ['', Validators.required],
            city: ['', Validators.required],
            zip: ['', Validators.required],
          }),
          pub: [''],
          condition: ['', [Validators.required, Validators.requiredTrue]],
        });
      });
  }
  nextFn() {
    if (this.personalInformationForm?.valid) {
      this.router.navigate(['checkout', 'paymentInformation']);
    }
  }
  ngOnDestroy() {
    if (this.subscription) return this.subscription.unsubscribe();
  }
}
