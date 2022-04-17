import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { Subject } from 'rxjs/internal/Subject';
import { AuthenticationEvent, AuthenticationRequest, AuthenticationResponse } from '../model/authentication.model';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable()
export class AuthenticationService {

    subject = new Subject<AuthenticationEvent>();
    
    url: string = environment.API_URL;

    constructor(private http: HttpClient) {}

    authenticate (request: AuthenticationRequest, code?: string): Observable<AuthenticationResponse> {
       
        let params =  code? new HttpParams().set('code', code) : null;
        let options = { }

        if (params) {
            options = {params}
        }
        
        return this.http.post<AuthenticationResponse>(`${this.url}/login`, request, options )
       
    }

    publishEvent(event: AuthenticationEvent): void {
        this.subject.next(event);
    }

    authenticationListener(): Observable<AuthenticationEvent> {
        return this.subject.asObservable();
    }


    image = "iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQAQAAAACoxAthAAACGElEQVR4Xu3WTW6DQAwFYG7A/W/JDSjvx0MaRaq8iOnimZbMjN/HxkLJdrZrez/4u0K6FdKtkG6FdCukWyHdCulWSLdGybGx9oP/+3ns19mOO5bVDRkn3B4k+lz5t3vILOEQcWlipRmsbshjhB1Q3U4ehDxNtLkdGyEPEsMruvkl41eUrzsTMkrqp8Ln6+NPhZDvk1WYJd+q+6+iVSG/6qvk6tW7JQGJpeKa5vv0Q2bIjk/EedHhgK+ediHDhFNT2xkE+CDtsAwZJ0zz8GDcQTxJTM8IGSYsph1SzsdYrW3IIMGgJNjFBwfJPMeMRsg0QavifgLuutQvETJK1HKKQ93xGDyrRhzyBMHtjmpJwzVdyDSRcBAx8ZezAiGj5Dqvd8lfQcj7u8g8ZJ4wgGO2Nc9yflChkDmivLJYKg6BlodsEzJIGK/lptHhgHnv3Q4ZJJwds+jIH4hVw7mQUYLuneb8as9Z8iBknND4BoFRElu5FzJMfHBwhNdKwg/QaEuEDBKE0H1tc0X3u0JUM4TGUtoSY13tkFmCBKfGF0ozVUZ2+ZBRUsUcAJZriIAFQtaK9V3igSnpxLEmqlXIA4QHLyF4DhOXOmVCJonDdRPwmX3IYwQvl+73dLmEMwp5gJxsbpilDmtzV8gkWRASC605W4ibhQySjcWuEjXJ/WW+IdOkUyHdCulWSLdCuhXSrZBuhXQrpFv/lvwA5MfbKhQZUgIAAAAASUVORK5CYII="

}