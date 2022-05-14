import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AuthenticationEvent, AuthenticationRequest, AuthenticationResponse } from 'src/app/features/authenticaion/model/authentication.model';
import { environment } from 'src/environments/environment';

const STORAGE_TOKEN_KEY: string = 'token';


const subject = new Subject<AuthenticationEvent>();


@Injectable({ providedIn: 'any' })
export class SecurityService {


    url: string = environment.API_URL;

    constructor(private http: HttpClient) { }

    authenticate(request: AuthenticationRequest, code?: string): Observable<AuthenticationResponse> {

        let params = code ? new HttpParams().set('code', code) : null;

        let options = {}

        if (params) {
            options = { params }
        }

        return this.http.post<AuthenticationResponse>(`${this.url}/login`, request, options);

    }

    publishEvent(event: AuthenticationEvent): void {
        subject.next(event);
    }

    authenticationListener(): Observable<AuthenticationEvent> {
        return subject.asObservable();
    }

    storeToken(token: string): void {
        localStorage.setItem(STORAGE_TOKEN_KEY, token);
    }

    getToken(): string {
        return localStorage.getItem(STORAGE_TOKEN_KEY) as string;
    }

    isTokenPresent(): boolean {
        return this.getToken() != null && this.getToken() != undefined && this.getToken().length > 0;
    }

    clearToken(): void {
        localStorage.removeItem(STORAGE_TOKEN_KEY);
    }

}