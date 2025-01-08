import { Component } from '@angular/core';
import { MenuItem, MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  buttons: MenuItem[] = [];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.buttons = this.menuService.getMenuItems();
  }
}
