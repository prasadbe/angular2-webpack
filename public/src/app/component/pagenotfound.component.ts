import 'bootstrap-css';
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: '/src/app/template/pagenotfound.html',
})
export class PageNotFoundComponent  { name = 'Angular';
  onHello(even: string):  void{
    alert(1);
  }
}
