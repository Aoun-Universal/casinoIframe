import { Component, OnInit } from '@angular/core';
import { ToggleService } from '../../services/toggle.service';

@Component({
  selector: 'app-mob-navigation',
  standalone: true,
  imports: [],
  templateUrl: './mob-navigation.component.html',
  styleUrl: './mob-navigation.component.css'
})
export class MobNavigationComponent implements OnInit {
  mobSideBarState: boolean = false;
  constructor(private toggle: ToggleService) {}
  ngOnInit(): void {
    this.getMobSideBarState();
  }

  getMobSideBarState() {
    this.toggle.getMobileSideBarState().subscribe((val: boolean) => {
      this.mobSideBarState = val;
    });
  }
  openBrowseMobSidebar() {
    this.toggle.setMobSideBarState(!this.mobSideBarState);
    this.toggle.setMobSideBarContent('Game');
  }

  openProfileMobSidebar() {
    this.toggle.setMobSideBarState(!this.mobSideBarState);
    this.toggle.setMobSideBarContent('Profile');
  }
  closeMobSideBar() {
    this.toggle.setMobSideBarState(false);
  }
}
