import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  email: string = '';
  password: string = '';

  constructor(private router: Router, private afAuth: AngularFireAuth) {}

  onSubmit() {
    firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        console.log('User logged in successfully');
        this.router.navigate(['/dashboard']);
      })
      .catch((error: any) => {
        console.log('Error logging in:', error);
      });
  }

}

