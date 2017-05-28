import 'bootstrap-css';
import {Component, OnInit, Input} from '@angular/core';
import {Service} from '../service/service';
import {Login} from '../interface/login';

@Component({selector: 'my-app', templateUrl: '/src/app/template/app.html', providers: [Service]})

export class AppComponent implements OnInit {
  @Input()email : string;
  private name : Login[];
  private username : string;

  constructor(private service : Service) {
    console.log(this.email);
  }
  ngOnInit() : void {
    this
      .service
      .getName()
      .subscribe(name => this.name = name);
  }

  place : string = 'Hi';
  onHello(even : string) : void {alert(1);}
}
