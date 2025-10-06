import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { Counter } from '@Components/counter/counter';
import { NavTab } from '@Models/navtab.interface';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation-tabs',
  imports: [
    RouterModule,
    MatIconModule,
    Counter,
    TranslatePipe
  ],
  templateUrl: './navigation-tabs.html',
  styleUrl: './navigation-tabs.scss'
})
export class NavigationTabs {
  @Input({ required: true }) tabs: NavTab[] = [];
}
