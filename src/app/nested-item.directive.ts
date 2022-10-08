import { Directive, AfterViewInit, ElementRef, ViewChild, Renderer2, OnInit } from '@angular/core';
import { NodeModel } from './node.model';
@Directive({
  selector: '[appNestedItem]'
})
export class NestedItemDirective {

  constructor(private el:ElementRef) { }
  

}