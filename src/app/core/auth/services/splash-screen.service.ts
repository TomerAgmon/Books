import { animate, AnimationBuilder, style } from '@angular/animations';
import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SplashScreenService {
  private stopped = false;
  private el: ElementRef;

  constructor(private animationBuilder: AnimationBuilder) {}

  init(element: ElementRef) {
    this.el = element;
  }

  hide() {
    if (this.stopped) {
      return;
    }

    const player = this.animationBuilder
      .build([style({ opacity: '1' }), animate(500, style({ opacity: '0' }))])
      .create(this.el.nativeElement);

    player.onDone(() => {
      this.el.nativeElement.style.display = 'none';
      this.stopped = true;
    });

    setTimeout(() => player.play(), 300);
  }
}
