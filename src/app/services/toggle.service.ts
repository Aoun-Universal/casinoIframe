import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToggleService {
  private sidebarState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  private Betslip: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private modalState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false); // Modal initially hidden
  private betslipState = new BehaviorSubject<boolean>(false);
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
  // Getter for the observable state
  getBetslipState(): Observable<boolean> {
    return this.betslipState.asObservable();
  }

  // Setter for updating the state
  setBetslipstate(state: boolean): void {
    this.betslipState.next(state);
  }

}
