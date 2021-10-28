import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {first} from 'rxjs/operators';
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  public userList: any[];
  public userListBackup: any[];

  constructor(private firestore: AngularFirestore) {}

   async ngOnInit() {
    this.firestore.collection('user').valueChanges().subscribe(userList => {
      this.userList = userList;
      this.userListBackup = userList;
    });
  }
  async initializeItems(): Promise<any> {
    this.userList =this.userListBackup;
  }
  async filterList(evt) {
    this.initializeItems();
    const searchTerm =evt.srcElement.value;
    if (!searchTerm) {
      return;
    }

    this.userList = this.userList.filter(currentUser =>{
      if(currentUser.nom && searchTerm){
        if (currentUser.nom.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }
  

  


}