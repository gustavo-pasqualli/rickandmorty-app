import { Directive, ElementRef, EventEmitter, Input, NgZone, OnDestroy, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appInfiniteScroll]',
  standalone: true
})
export class InfiniteScrollDirective implements OnInit, OnDestroy {
  @Input() root?: HTMLElement | null;
  @Output() visible = new EventEmitter<void>();

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef, private zone: NgZone) {}

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          this.zone.run(() => this.visible.emit());
        }
      }, {
        root: this.root ?? null
      });

      this.observer.observe(this.el.nativeElement);
    });
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
