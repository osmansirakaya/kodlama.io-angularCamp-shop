import { AccountService } from './../services/account.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private accountService: AccountService, private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean { // gitmek istediği yer 
        let logged = this.accountService.isLoggedIn();
        if (logged) { // eğer login ise 
            return true;
        }
        this.router.navigate(["login"]); // login değilse login sayfasına yönlendir
        return false;
    }
}