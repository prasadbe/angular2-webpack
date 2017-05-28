import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../service/service';
@Component({
  selector: 'my-app',
  templateUrl: '/src/app/template/logout.html',
  providers:[Service]
})
export class LogoutComponent  { 
    private username:string;
    private email:string;
    private password:string;
    private error:string;
    constructor(private service:Service, private router:Router) {
        this.email = '';
        this.password = '';
        localStorage.removeItem('email');
    }
    Logout() {
        this.username = '';
    }
    loginSubmit() {
        this.service.doLogin({
            email:this.email,
            password:this.password
        }).then((success) => {
            console.log(success);
            this.username = this.email;
            localStorage.setItem('email',this.email);
            this.router.navigate(['/home']);
        }).catch((error) => {
            this.error = JSON.parse(error._body).msg;
        });
    }

}