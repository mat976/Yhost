import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignupComponent } from '../form/signup/signup.component';
import { SigninComponent } from '../form/signin/signin.component';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {
  title = 'yhost';
  constructor(private MatDialog: MatDialog) { }
  openSigninDialog() {
    this.MatDialog.open(SignupComponent 
      , {
        width: '500px',
    });
  }
  openSignupDialog() {
    this.MatDialog.open(SigninComponent 
      , {
        width: '500px',
    });
  }

  ngOnInit(): void {
  }

}
