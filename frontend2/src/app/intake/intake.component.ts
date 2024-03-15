import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-intake',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './intake.component.html',
  styleUrl: './intake.component.css'
})
export class IntakeComponent {
  food_items = new Array();
  selected_item: any = 'rice';

  constructor(public httpClient: HttpClient, public globalService: GlobalService) {
    httpClient.get("http://localhost:8080/api/test/user/get_items").subscribe({
      next: data=> {
        this.food_items = data as Array<Object>;
        this.selected_item = this.food_items[0].name;
      },
      error: error=>{
        alert("Some error occured");
        console.log(error);
      }
    })
  }

  onFoodIntakeUpdate() {
    console.log(this.selected_item)
    var item_object = null;

    for (var i=0; i < this.food_items.length; i++) {
      if ( this.food_items[i].name == this.selected_item ) {
        item_object = this.food_items[i];
      }
    }
    
    console.log({
      "user": this.globalService.global.value.user,
      "item_name": item_object.name,
      "calories": item_object.calories,
      "date": this.globalService.getDate()
    })
    
    if ( item_object != null ) {
      this.httpClient.post("http://localhost:8080/api/test/user/add_user_data", 
      {
        "user": this.globalService.global.value.user,
        "item_name": item_object.name,
        "calories": item_object.calories,
        "date": this.globalService.getDate()
      }).subscribe({
        next: data => {
          alert("success");
        },
        error: error=> {
          alert("some error occured");
          console.log(error);
        }
      })
    }
    else {
      alert("item not found");
    }
  }
}
