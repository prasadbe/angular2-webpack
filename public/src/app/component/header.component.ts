import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'my-header',
  templateUrl: '/src/app/template/header.html',
})
export class HeaderComponent  { 
  @Input() name: string;
  private username:string;
  @Output()  logout: EventEmitter<string> = new EventEmitter<string>();
  constructor() {
    this.username = localStorage.getItem('email');
    setTimeout(() => {
      console.log(this.username);
      this.logout.emit();
    },2000);
    console.log(this.logout);
    
    
  }
  
  OnClick(): void {
    console.log(this.name);
  }
 }
