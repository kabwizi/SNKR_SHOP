import { Injectable } from '@angular/core';

@Injectable()
export class ToggleSmallMenuService {
  public showSmallMenu: boolean = false;
  toggleShowOrHideSmallMenuFn() {
    this.showSmallMenu = !this.showSmallMenu;
  }
}
