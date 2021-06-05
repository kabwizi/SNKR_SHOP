import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { LogInOptionComponent } from './log-in-option/log-in-option.component';
import { LoginComponent } from './login.component';
import { SignInOptionComponent } from './sign-in-option/sign-in-option.component';

@NgModule({
  declarations: [LoginComponent, SignInOptionComponent, LogInOptionComponent],
  exports: [LoginComponent, SignInOptionComponent, LogInOptionComponent],
  imports: [SharedModule],
})
export class LoginModule {}
