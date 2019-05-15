import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../types/user';

@Injectable()
export class GithubUsersService {
  githubApiUrl = 'https://api.github.com';

  constructor(public http: Http) {
    console.log('Hello GithubUsers Provider');
  }

  // Load all github users
  load(): Observable<User[]> {
    return this.http
      .get(`${this.githubApiUrl}/users`)
      .pipe(map(res => res.json() as User[]));
  }

  // Get github user by providing login(username)
  loadDetails(login: string): Observable<User> {
    return this.http
      .get(`${this.githubApiUrl}/users/${login}`)
      .pipe(map(res => res.json() as User));
  }

  // Search for github users
  searchUsers(searchParam: string): Observable<User[]> {
    return this.http
      .get(`${this.githubApiUrl}/search/users?q=${searchParam}`)
      .pipe(map(res => res.json().items as User[]));
  }
}
