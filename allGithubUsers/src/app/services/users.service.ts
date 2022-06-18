import { HttpClient } from '@angular/common/http';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  apiPath:string="https://api.github.com/users"
  constructor( private httpClient:HttpClient) { }
  getUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiPath);
  }
}
