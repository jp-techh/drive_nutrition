import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../services/global.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recommendations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recommendations.component.html',
  styleUrl: './recommendations.component.css'
})
export class RecommendationsComponent {
  recommended_items = new Array();
  actual_intake = 0;
  expected_intake = 2000;
  
  constructor(public httpClient: HttpClient,public globalService: GlobalService) {
    
    httpClient.get("http://localhost:8080/api/test/user/get_user_data?user="+ globalService.global.value.user).subscribe({
      next: data=>{
        var intakeItems = (data as Array<Object>);
        var today = this.globalService.getDate()
        console.log("today", today);
        
        for (var i =0; i < intakeItems.length; i++) {
          var intakeItem: any = intakeItems[i];
          console.log(intakeItem)

          if ( intakeItem.date == today) {
            this.actual_intake += intakeItem.calories;
          }
        }
      },
      error: error=> {
        alert("Some error occured");
        console.log(error);
      }
    })

    httpClient.get("http://localhost:8080/api/test/user/recommendations?user="+ globalService.global.value.user).subscribe({
      next: data=> {
        //for (int i =0; i < data; i++)
        var items = (data as Array<Object>);
        console.log(items);
        for (var i =0; i < items.length; i++) {
          this.recommended_items.push(items[i]);
        }
      },
      error: error => {
        alert("Some error occured");
        console.log(error);
      }
    }) 
  }
}
