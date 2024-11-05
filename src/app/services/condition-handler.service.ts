import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConditionHandlerService {

  private currentRoutePath: BehaviorSubject<any | null> = new BehaviorSubject<any | null>(null);

  constructor() {
  }

  getCurrentRoutePath(): BehaviorSubject<any | null> {
    return this.currentRoutePath;
  }

  setCurrentRoutePath(value: any | null): void {
    this.currentRoutePath.next(value);
  }
}
