import { Directive, ElementRef, Renderer, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})

export class HighlightDirective {
  private bkcolor = 'white'

  @HostListener('mouseenter') 
  mousehover(){
    this.bkcolor = 'red'
  }
  
  @HostListener('mouseleave') 
  mouseleave(){
    this.bkcolor = 'green'
  }

  @HostBinding('style.backgroundColor')
  get color(){
    return this.bkcolor;
  }
  // from dependency injection in constructor
  constructor(private element : ElementRef,private renderer : Renderer) { 
    // this.element.nativeElement.style.backgroundColor = 'black';
    // also can be achieved through Renderer
    //this.renderer.setElementStyle(this.element.nativeElement,'background-color','gray')

  }

}
