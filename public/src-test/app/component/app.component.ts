import 'bootstrap-css';
import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: '/src/app/template/app.html',
})

export class AppComponent  { 
  name:any[] = [{
    'name' : 'Prasad',
    'canView' : true,
  },
  {
    'name' : 'Now',
    'canView' : false,
  }];
  place:string ='Hi';
  onHello(even: string):  void{
    alert(1);
  }
}
