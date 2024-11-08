import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  private sidebarState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }
  getSidebar(){
    return this.sidebarState;
  }
  setSidebar(value:boolean){
    this.sidebarState.next(value)
  }
}
