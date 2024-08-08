import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScaleCard]',
  standalone: true
})
export class ScaleCardDirective {


  constructor(private _ElementRef: ElementRef, private _Renderer2: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.scale(1.1);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.scale(1)
  }

  private scale(scale: number) {
    this._Renderer2.setStyle(this._ElementRef.nativeElement, 'transform', `scale(${scale})`);
    this._Renderer2.setStyle(this._ElementRef.nativeElement, 'transition', 'transform 0.6s ease');
  }
}
