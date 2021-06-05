import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-log-in-option',
  templateUrl: './log-in-option.component.html',
})
export class LogInOptionComponent implements OnInit {
  public loginForm: FormGroup | undefined;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }
}
