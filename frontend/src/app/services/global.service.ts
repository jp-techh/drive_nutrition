import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public global = new BehaviorSubject<any>({
    user: null
  });

  getDate() {
    const today = new Date();
    const yyyy = today.getFullYear();
    var mm: any = today.getMonth() + 1; // Months start at 0!
    var dd: any = today.getDate();    
    if (dd < 10) dd = '0' + dd;    
    if (mm < 10) mm = '0' + mm;
    const formattedToday = dd + '/' + mm + '/' + yyyy;
    return formattedToday
  }
}
