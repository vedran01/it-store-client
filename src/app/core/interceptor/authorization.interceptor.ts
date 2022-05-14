import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SecurityService } from '../service/security.service';


@Injectable({
    providedIn: 'root'
})
export class AuthorizationHeaderInterceptor implements HttpInterceptor {


    constructor(private facadeService: SecurityService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = this.facadeService.getToken();

        if (token) {

            const tokenizedReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
            return next.handle(tokenizedReq);
        }

        return next.handle(req);
    }
}