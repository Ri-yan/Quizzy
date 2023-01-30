import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangebg]'
})
export class ChangebgDirective {
  @Input() isCorrect :Boolean = false;
  constructor(private el:ElementRef,private render:Renderer2) { }
  @HostListener('click') answer(){
    if(this.isCorrect){
      this.render.setStyle(this.el.nativeElement,'background','#7EE081');
      this.render.setStyle(this.el.nativeElement,'color','white');
      this.render.setStyle(this.el.nativeElement,'border-color','1px solid #7EE081');
    }
    else{
      this.render.setStyle(this.el.nativeElement,'background','#eb7979');
      this.render.setStyle(this.el.nativeElement,'color','white');
      this.render.setStyle(this.el.nativeElement,'border-color','1px solid #eb7979');
    }
  }
}
