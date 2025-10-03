import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { Counter } from '../counter/counter';

export type NavTab = {
  label: string;
  route: string | any[];
  icon?: string;
  count?: number;
  disabled?: boolean;
};

@Component({
  selector: 'app-navigation-tabs',
  imports: [
    RouterModule,
    MatIconModule,
    Counter
  ],
  templateUrl: './navigation-tabs.html',
  styleUrl: './navigation-tabs.scss'
})
export class NavigationTabs {
  @Input({ required: true }) tabs: NavTab[] = [];
}
