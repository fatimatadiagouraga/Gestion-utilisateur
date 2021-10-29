import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-page-passwordforgot',
  templateUrl: './page-passwordforgot.page.html',
  styleUrls: ['./page-passwordforgot.page.scss'],
})
export class PagePasswordforgotPage implements OnInit {

  constructor(public toastCtrl:ToastController) {}
   

  ngOnInit() {
  }
  async openToast() {  
    const toast = await this.toastCtrl.create({  
      message: 'Envoyer avec succès',   
      duration: 4000  ,
      position:'middle'
    });  
    toast.present();  

    
  }
}
