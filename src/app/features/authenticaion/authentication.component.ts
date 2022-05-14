import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { EAuthenticationEvent } from 'src/app/core/enum/enum.authentication-event';
import { SecurityService } from 'src/app/core/service/security.service';
import { AuthenticationEvent } from './model/authentication.model';


@Component({
    templateUrl: './authentication.component.html',
    styleUrls: ['./authentication.component.scss']
})
export class AuthenticationCompoent implements OnInit {

    message: string = '';

    constructor(private service: SecurityService, 
        private router: Router) {}

    ngOnInit(): void {
        this.service.authenticationListener()
            .subscribe(event => this.handleRouting(event));
    }

    handleRouting(event: AuthenticationEvent): void {

        switch (event.type) {
            case EAuthenticationEvent.SUCCESS:
                 this.service.storeToken(event.data);
                this.router.navigate(['dashboard']);
            break;
            case EAuthenticationEvent.SETUP_2FA:
                this.router.navigateByUrl('login/setup2fa', { state: { event } });
            break;
            case EAuthenticationEvent.CODE_2FA:
                this.router.navigate(['login/code2fa'], { state: { data: event.request }});
            break;
            case EAuthenticationEvent.FAILURE:
                this.message = event.data
            break;
        }

    }

}