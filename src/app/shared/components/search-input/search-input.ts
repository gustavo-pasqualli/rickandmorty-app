import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-search-input',
  imports: [
    MatInputModule,
    ReactiveFormsModule,
    TranslatePipe
  ],
  templateUrl: './search-input.html',
  styleUrl: './search-input.scss'
})
export class SearchInput {
  @Input({ required: true }) control!: FormControl<any>;
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type = 'text';
}
