import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { EAuthenticationEvent } from 'src/app/core/enum/enum.authentication-event';
import { AuthenticationRequest, AuthenticationResponse } from '../../model/authentication.model';
import { AuthenticationService } from '../../service/authentication.service';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {


    constructor(private service: AuthenticationService) { }


    login(username: string, password: string): void {
        let request =  { username, password }
        this.service.authenticate(request)
            .subscribe({
                next: data => this.handleSuccess(request, data),
                error: error => this.handleError(request, error)
            });
    }

    handleSuccess(request: AuthenticationRequest, data: AuthenticationResponse): void {
        if (data.status = 'SUCCESS') {
            this.service.publishEvent({ type: EAuthenticationEvent.SUCCESS, request: request,  data: data.token });
        }
        if (data.status = 'SETUP_2FA') {
            this.service.publishEvent({ type: EAuthenticationEvent.SETUP_2FA, request: request, data: data.qrCode });
        }
    }

    handleError(request: AuthenticationRequest, error: HttpErrorResponse): void {
        let response: AuthenticationResponse = error.error;

        if (response.status == 'CODE_2FA') {
            this.service.publishEvent({ type: EAuthenticationEvent.CODE_2FA, request: request, data: ''})
        } 
    }

}