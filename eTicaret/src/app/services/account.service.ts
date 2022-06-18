import { Injectable } from '@angular/core';
import { User } from '../login/user';

@Injectable()
export class AccountService {

  constructor() { }
  loggedIn = false;

  login(user: User): boolean {
    if (user.userName == "engin" && user.password == "12345") {
      this.loggedIn = true;
      localStorage.setItem("isLogged", user.userName);
      return true;
    }
    return false;
  }

  isLoggedIn() { // bu kullanıcı gerçekten login mi değil mi kontrol için bakıyoruz
    return this.loggedIn;
  }

  logOut() { // kullanıcı isterse sistemden çıkıs da yapabilir
    localStorage.removeItem("isLogged");
    this.loggedIn = false;
  }
}
