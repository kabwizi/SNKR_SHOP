import { Component } from '@angular/core';
import { ToggleSmallMenuService } from 'src/app/services/toggle-small-menu.service';

@Component({
  selector: 'app-small-screen-menu',
  templateUrl: './small-screen-menu.component.html',
})
export class SmallScreenMenuComponent {
  constructor(public showSmallMenu: ToggleSmallMenuService) {}
  hideMenuFn() {
    this.showSmallMenu.toggleShowOrHideSmallMenuFn();
  }
}
