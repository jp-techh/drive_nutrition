import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GlobalService } from '../services/global.service';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButton} from '@angular/material/button'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MatCardModule, MatGridListModule, MatFormFieldModule, MatInputModule, MatButton],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  constructor(public httpClient: HttpClient, private router: Router, public globalService: GlobalService){
   
  }

  public loginUser(form: NgForm) {
    
    console.log(form.value);
    this.httpClient.post('http://localhost:8080/api/auth/signin', form.value).subscribe({
      next: data => {
        console.log(data);
        this.globalService.global.next({
          user: form.value.username
        })
        this.router.navigate(['recommendations']);
      },
      error: error => {
          alert("Invalid credentials");
          console.error('There was an error!', error);
      }
    });
  }

  public onSignup() {
    this.router.navigate(['signup']);
  }
}
