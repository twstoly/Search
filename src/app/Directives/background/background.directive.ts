import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {

  constructor(private elem:ElementRef) { }

  @HostListener("click") onClicks(){
    this.textDeco("black");
    this.textBackground("silver");
  }
  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("silver");
    this.textBackground("black");
  }
  private textDeco(action:string){
    this.elem.nativeElement.style.color = action;
    // this.elem.nativeElement.style.color = "black"
  }
  private textBackground(action:string){
    this.elem.nativeElement.style.background = action;
  }
}
