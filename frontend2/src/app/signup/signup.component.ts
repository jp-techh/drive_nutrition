import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(public router: Router, public httpClient: HttpClient) {}

  public signupUser(form: NgForm) {
    this.httpClient.post("http://localhost:8080/api/auth/signup", form.value).subscribe({
      next: data => {
        alert("Signup success.")
        this.router.navigate(['login']);
      },

      error: error => {
        alert("Invalid data")
      }
    })
    console.log(form.value);
  }

  public onSignin() {
    this.router.navigate(['login']);
  }
}
