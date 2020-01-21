import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {GitUser} from './git-user';
import {SearchUserComponent} from './search-user/search-user.component';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  user: GitUser[] = [];
  _URL = 'https://api.github.com/users/';
  token = '?access_token=3cbbddb991c02e7d5a2f0fd4224f9267a5153e5f';

  constructor(private http: HttpClient) {
    this
  }

  searchMyUser(searchTerm: string) {
    interface data {
      login: string;
      avatar_url: string;
      following: string;
      followers: string;
      public_repos: string;
      bio: string;
      name: string;
      company: string;
      location: string;
      created_at: Date;
    }

    return new Promise((resolve, reject) => {
      this.user = [];
      this.http.get<data>(this._URL + searchTerm + this.token).toPromise().then(
        (results) => {
          this.user.push(results);
          resolve();
        },
        (error) => {
          reject();
        }
      );
    });
  }
}

