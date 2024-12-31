import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToggleService {
  mobSideBarState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  mobSideBarContent: BehaviorSubject<string> = new BehaviorSubject<string>(
    'Game'
  );

  constructor() {}

  getMobileSideBarState() {
    return this.mobSideBarState;
  }

  getMobSideBarContent() {
    return this.mobSideBarContent;
  }

  setMobSideBarState(val: boolean) {
    this.mobSideBarState.next(val);
  }

  setMobSideBarContent(val: string) {
    this.mobSideBarContent.next(val);
  }
}
