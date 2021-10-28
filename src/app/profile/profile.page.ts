import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: any;
  constructor( private route: Router, private auth: AngularFireAuth,
  private fire: AngularFirestore  ) {
    
     
  }

  ngOnInit() { 

    this.auth.authState.subscribe(auth =>{
      if(auth){
        this.fire.collection('user').doc(auth.uid).valueChanges().subscribe(result => {
          this.user = result; 
          console.log(this.user);
        
        });
      }
    })
    
  }

}



  

  