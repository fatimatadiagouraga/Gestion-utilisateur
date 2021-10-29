import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-register',
  templateUrl: './page-register.page.html',
  styleUrls: ['./page-register.page.scss'],
})
export class PageRegisterPage implements OnInit {

  constructor(public serve : ServiceService, public database : AngularFirestore,public route :Router ) { }

  ngOnInit() {
  }
  register(data){
    try {
      this.serve.register(data.value.email,data.value.password).then(response =>{
        console.log(response);
        this.database.collection('user').doc(response.user.uid).set({
          'nom': data.value.nom,
          'prenom': data.value.prenom,
          'email': data.value.email,
          'password': data.value.password,
          'telephone': data.value.tel
          
        })
        this.route.navigate(["login"]);
      })
    } catch (error) {
      
    }
  }

}
