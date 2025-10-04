import { Component, Input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-page-title',
  imports: [
    TranslatePipe
  ],
  templateUrl: './page-title.html',
  styleUrl: './page-title.scss'
})
export class PageTitle {
  @Input() label = '';
}
