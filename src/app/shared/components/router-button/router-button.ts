import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-router-button',
  imports: [
    RouterLink,
    TranslatePipe
  ],
  templateUrl: './router-button.html',
  styleUrl: './router-button.scss'
})
export class RouterButton {
  @Input({required: true}) routerLink = '';
  @Input({required: true}) label = '';
}
