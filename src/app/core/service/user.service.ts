import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserInfo } from '../model/identity.model';
import { UserProfile } from '../model/user.model';

@Injectable({
    providedIn: 'any'
})
export class UserService {
    
    url: string = environment.API_URL;

    constructor(private http: HttpClient) { }

    getUserInfo(): Observable<UserInfo> {
        return this.http.get<UserInfo>(`${this.url}/user/info`);

    }

    findProfileById(arg0: string | null): Observable<UserProfile> {
        throw new Error('Method not implemented.');
      }

}