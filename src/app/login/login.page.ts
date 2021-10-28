import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public verification : ServiceService,public route : Router) { }

  ngOnInit() {
  }
  loginUser(data){
    try {
      this.verification.authentification(data.value.email, data.value.password).then(res =>{
         console.log(res),
        this.route.navigate(["home"]);
      }
        
      )
    } catch (error) {
      console.log(error);
      
    }
  }
}
