import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToggleService {
  private sidebarState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
  );
  private modalState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false); // Modal initially hidden
  modalState$ = this.modalState.asObservable();

  sidebarState$ = this.sidebarState.asObservable();
  constructor() {}

  getSidebar() {
    return this.sidebarState;
  }
  setSidebar(value: boolean) {
    this.sidebarState.next(value);
  }
  toggleSidebar() {
    this.sidebarState.next(!this.sidebarState.value);
  }

 

  // Betslip
   // Loyalty Terms Modal
  //  getBetslipState() {
  //   return this.Betslip;
  // }
  // setBetslipstate(value: boolean) {
  //   this.Betslip.next(value);
  // }
}
  