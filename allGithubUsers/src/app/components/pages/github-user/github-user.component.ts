import { UsersService } from './../../../services/users.service';
import { User } from './../../../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.css']
})
export class GithubUserComponent implements OnInit {
  users: User[];
  constructor(private usersServices:UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    this.usersServices.getUsers().subscribe(data =>{
      this.users=data;
    })
  }
}
