import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private auth:AngularFireAuth) { }

  authentification(email,password){
    return new Promise<any>((resolve, reject) => 
    {
      this.auth.signInWithEmailAndPassword(email,password).then (
        res=>resolve(res),
        erreur=>reject(erreur)
      )
    })


  }
  register(email,password){
    return new Promise<any>((resolve, reject) => {
      this.auth.createUserWithEmailAndPassword(email,password).then(
        res=>resolve(res),
        erreur=>reject(erreur)
      )
    })
  }

}


