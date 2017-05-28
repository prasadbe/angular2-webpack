import 'bootstrap-css';
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: '/src/app/template/home.html',
})
export class HomeComponent  { name = 'Angular';
  onHello(even: string):  void{
    alert(1);
  }
}
