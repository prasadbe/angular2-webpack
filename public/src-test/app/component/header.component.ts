import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'my-header',
  templateUrl: '/src/app/template/header.html',
})
export class HeaderComponent  { 
  @Input() name: string;
  @Output()  hello: EventEmitter<string> = new EventEmitter<string>(); 
  OnClick(): void {
    this.hello.emit('clicked');
  }
 }
