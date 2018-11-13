import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private userUrl = 'https://localhost:2080/user'

  public getUsers(){
    return this.http.get<User[]>(this.userUrl + "/" + "getAllUsers");
  }

  public deleteUser(user){
    return this.http.delete(this.userUrl + "/" + user.id);
  }

  public addUser(user){
    return this.http.post<User>(this.userUrl + "/" + "addUser", user);
  }

}
