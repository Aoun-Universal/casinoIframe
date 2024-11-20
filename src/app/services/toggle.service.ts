import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToggleService {
  private sidebarState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  private Betslip: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private BetslipContent: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private vipModalState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false); // VIP modal initially hidden
  private vaultModalState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);; // VIP modal initially hidden
  private statisticsModalState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private statisticsTableModalState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private notificationModalState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);;
  private signUpState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private walletModal: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private loginState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private wallet: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private logoutState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private LeaderBoardModalState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private RaceModalState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private campaingModalState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private WalletsettingState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private ForgotpasswordState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  sidebarState$ = this.sidebarState.asObservable();


  constructor() { }

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

  getBetslipContent() {
    return this.BetslipContent;
  }


  setBetslipContent(value: boolean) {
    this.BetslipContent.next(value);
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

  // campaing modal methods
  getCampaingModalState() {
    return this.campaingModalState;
  }
  setcampaingModalState(value: boolean) {
    this.campaingModalState.next(value);
  }

  // Vault modal methods
  getVaultModalState() {
    return this.vaultModalState;
  }
  setVaultModalState(value: boolean) {
    this.vaultModalState.next(value);
  }
  // statisticsmodal
  getstatisticModalstate() {
    return this.statisticsModalState;
  }
  setstatisticModal(value: boolean) {
    this.statisticsModalState.next(value)
  }
  // statisticsmodal
  getstatisticsTableModalState() {
    return this.statisticsTableModalState;
  }
  setstatisticsTableModalState(value: boolean) {
    this.statisticsTableModalState.next(value)
  }
  // notificationModal
  getnotificationModalState() {
    return this.notificationModalState
  }
  setnotificationModal(value: boolean) {
    this.notificationModalState.next(value)
  }

  getWalletModal() {
    return this.walletModal
  }
  setWalletModal(value: boolean) {
    this.walletModal.next(value)
  }

  getWallet() {
    return this.wallet
  }
  setWallet(value: boolean) {
    this.wallet.next(value)
  }


  getLeaderBoardstate() {
    return this.LeaderBoardModalState;
  }
  setLeaderBoardModal(value: boolean) {
    this.LeaderBoardModalState.next(value);
  }


  getRaceModalstate() {
    return this.RaceModalState;
  }
  setRaceModal(value: boolean) {
    this.RaceModalState.next(value);

  }

  getLogin() {
    return this.loginState
  }
  setLogin(value: boolean) {
    this.loginState.next(value);
  }
  // Wallet setting Modal

  getWalletsetting() {
    return this.WalletsettingState
  }
  setWalletsetting(value: boolean) {
    this.WalletsettingState.next(value);
  }

  // Forgot password Modal

  getForgotpassword() {
    return this.ForgotpasswordState
  }
  setForgotpassword(value: boolean) {
    this.ForgotpasswordState.next(value);
  }


  getSignUp() {
    return this.signUpState
  }
  setSignUp(value: boolean) {
    this.signUpState.next(value);
  }

  getLogout() {
    return this.logoutState
  }
  setLogout(value: boolean) {
    this.logoutState.next(value);
  }

}
