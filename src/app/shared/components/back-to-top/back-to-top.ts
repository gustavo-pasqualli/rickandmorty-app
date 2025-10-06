import { Component, HostListener, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-back-to-top',
  imports: [
    MatIconModule
  ],
  templateUrl: './back-to-top.html',
  styleUrl: './back-to-top.scss'
})
export class BackToTop {
  visible = signal(false);

  @HostListener('window:scroll') onScroll() {
    this.visible.set(window.scrollY > 400);
  }

  goTop() {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
  }
}
