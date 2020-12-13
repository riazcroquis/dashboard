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
    this.usersUrl = 'http://localhost:8080/api/users';
  }

  public findAll(): Observable<User[]>{
    return this._http.get<User[]>(this.usersUrl);
  }

  public save(user: User){
    return this._http.post(this.usersUrl, user);
  }

  public getUser(id : number): Observable<User>{
    return this._http.get<User>(`${this.usersUrl}/${id}`);
  } 

  // public updateUser(id: number, value: any): Observable<Object> {
  //   return this._http.put(`${this.usersUrl}/${id}`, value);
  // }
  // check how to update all values for user

  public deleteUser(id: number): Observable<any> {
    return this._http.delete(`${this.usersUrl}/${id}`, {responseType: 'text'});
  }

  public getUserByDep(department: string): Observable<any> {
    return this._http.get(`${this.usersUrl}/${department}`);
  }

  public updateUser(id : number, user: User){
    return this._http.put(`${this.usersUrl}/${id}`, user);
  }

}
