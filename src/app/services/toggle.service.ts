import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToggleService {
  private sidebarState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  private Betslip: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private vipModalState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false); // VIP modal initially hidden
  private vaultModalState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);; // VIP modal initially hidden
  private statisticsModalState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);; 
  private notificationModalState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);; 


  sidebarState$ = this.sidebarState.asObservable();


  constructor() {}

  // Sidebar methods
  getSidebar() {
    return this.sidebarState;
  }
  setSidebar(value: boolean) {
    this.sidebarState.next(value);
  }
  toggleSidebar() {
    this.sidebarState.next(!this.sidebarState.value);
  }

  // Betslip methods
  getBetslipState() {
    return this.Betslip;
  }
  setBetslipstate(value: boolean) {
    this.Betslip.next(value);
  }

// VIP modal methods
getVipModalState() {
  return this.vipModalState;
}
setVipModalState(value: boolean) {
  this.vipModalState.next(value);
}

// Vault modal methods
getVaultModalState() {
  return this.vaultModalState;
}
setVaultModalState(value: boolean) {
  this.vaultModalState.next(value);
}
// statisticsmodal
getstatisticModalstate(){
  return this.statisticsModalState;
}
setstatisticModal(value:boolean){
  this.statisticsModalState.next(value)
}
// notificationModal
getnotificationModalState(){
  return this.notificationModalState
}
setnotificationModal(value:boolean){
  this.notificationModalState.next(value)
}
}
