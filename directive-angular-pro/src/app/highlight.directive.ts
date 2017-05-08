import { Directive, ElementRef, Renderer,Input, HostListener, HostBinding, OnInit} from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})

export class HighlightDirective {
  @Input('defaultcolor') defaultcolor;
  @Input('highlightcolor') highlightcolor;

  private bkcolor = this.defaultcolor

  @HostListener('mouseenter') 
  mousehover(){
    this.bkcolor = this.highlightcolor
  }
  
  @HostListener('mouseleave') 
  mouseleave(){
    this.bkcolor = this.defaultcolor
  }

  @HostBinding('style.backgroundColor')
  get setColor(){
    return this.bkcolor;
  }
  // from dependency injection in constructor
  constructor(private element : ElementRef,private renderer : Renderer) { 
    // this.element.nativeElement.style.backgroundColor = 'black';
    // also can be achieved through Renderer
    //this.renderer.setElementStyle(this.element.nativeElement,'background-color','gray')

  }

}
