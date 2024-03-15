import { Component } from '@angular/core';
import { RouterOutlet,RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { GlobalService } from './services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'food-app';
  user_name = null;

  constructor(public globalService: GlobalService, public router: Router) {

    router.events.subscribe((navigationEnd )=>{
      var curr_url = (navigationEnd as any).url;
      
      if ( this.user_name  == null && curr_url != undefined ) {
        if ( curr_url != "/login" && curr_url != '/signup') {
          router.navigate(['login']);
        }
      }
    });
    
    this.globalService.global.subscribe({
      next: newValue => { 
        console.log('Update Detected:', newValue.user)
        this.user_name = newValue.user
      }
    });
  }

  onLogout() {
    this.globalService.global.next(()=>{
      user: null
    })
    this.router.navigate(['login']);
  }
}
