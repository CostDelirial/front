import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('passwordEyeLogin', { read: ElementRef }) passwordEye: ElementRef;

  passwordTypeInput = 'password'

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  togglePasswordMode() {
    this.passwordTypeInput = this.passwordTypeInput === 'text' ? 'password' : 'text'
    const nativeEl = this.passwordEye.nativeElement.querySelector('input')
    const inputSelection = nativeEl.selectionStart
    nativeEl.focus()

    setTimeout(() => {
      nativeEl.setSelectionRange( inputSelection, inputSelection )
    }, 1);
  }

  login() {
    this.router.navigateByUrl('/auth/welcome');
  }

}
