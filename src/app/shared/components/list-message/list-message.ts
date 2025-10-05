import { TranslatePipe } from '@ngx-translate/core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-message',
  imports: [
    TranslatePipe
  ],
  templateUrl: './list-message.html',
  styleUrl: './list-message.scss'
})
export class ListMessage {
  @Input() title = 'teste';
  @Input() description = 'teste';
}
