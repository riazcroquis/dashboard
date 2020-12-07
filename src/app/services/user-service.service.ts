import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../modules/posts/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private usersUrl: string;

  constructor(private _http: HttpClient) { 
    this.usersUrl = 'http://localhost:8080/users';
  }

  public findAll(): Observable<User[]>{
    return this._http.get<User[]>(this.usersUrl);
  }

  public save(user: User){
    return this._http.post<User>(this.usersUrl, user);
  }
}
