import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-character-card',
  imports: [
    TruncatePipe,
    MatIconModule,
  ],
  templateUrl: './character-card.html',
  styleUrl: './character-card.scss'
})
export class CharacterCard {
  @Input() image = '';
  @Input() name = '';
  @Input() species = '';
  @Input() isFavorite = false;
  @Output() favoriteToggle = new EventEmitter<void>();

  favorite() {
    this.favoriteToggle.emit();
  }
}
