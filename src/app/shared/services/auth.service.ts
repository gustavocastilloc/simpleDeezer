import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  useradmin : User={username:'admin',password:'admin'};
  currentUser: User={username:'',password:''};
  isLogin(){
    if((this.useradmin.username===this.currentUser.username) && (this.useradmin.password===this.currentUser.password)){
      console.log('iguales');
      return true;
    }
    return false;
  }
  isSendUser(currentUser : User){
    this.currentUser=currentUser;
  }
}
