import { Component} from '@angular/core';


import {HeaderComponent} from './header/header.component';

// import {Data1Service} from './header/data1.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:'',
  styleUrls: ['./app.component.css'],
  providers:[],
    
})

 export class AppComponent {
  title = 'app works!';



  // *************Go to Other Route navigation****************

    // constructor(public router:Router){

    // }
    constructor(public router: Router) {}
    goToOtherRoute = function(email,password){
      console.log(email, password);
      // httprequest....email and password
      // response ok
      // response not ok-----error on the page
      if(email == 'abc@gmail.com' && password == '1234'){
        this.router.navigate(['/about']);
      }else{
        alert("username password does not match, login again");
      }
	}
}