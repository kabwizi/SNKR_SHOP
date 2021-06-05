import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { showOrHideLoginPopUpAction } from '../ngrx/actions/login.actions';
import { ILogin } from '../ngrx/reducers/login.reducer';
import { loginSelector } from '../ngrx/selectors/login.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginState$: Observable<ILogin> | undefined;
  public isNewUser: boolean = true;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.loginState$ = this.store.select(loginSelector);
  }
  hideLoginPopUpFn() {
    this.store.dispatch(showOrHideLoginPopUpAction({ value: false }));
  }
  toggleLoginOrSigninFn() {
    this.isNewUser = !this.isNewUser;
  }
}
