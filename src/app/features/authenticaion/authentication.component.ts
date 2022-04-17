import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EAuthenticationEvent } from 'src/app/core/enum/enum.authentication-event';
import { AuthenticationEvent } from './model/authentication.model';
import { AuthenticationService } from './service/authentication.service';


@Component({
    templateUrl: './authentication.component.html',
    styleUrls: ['./authentication.component.scss']
})
export class AuthenticationCompoent implements OnInit {

    constructor(private service: AuthenticationService, private router: Router) {}

    ngOnInit(): void {
        this.service.authenticationListener().subscribe(event => this.handleRouting(event));
    }

    handleRouting(event: AuthenticationEvent): void {

        switch (event.type) {
            case EAuthenticationEvent.SUCCESS:
                console.log('Go to dashboard');
            break;
            case EAuthenticationEvent.SETUP_2FA:
                this.router.navigateByUrl('login/setup2fa', { state: { event } });
            break;
            case EAuthenticationEvent.CODE_2FA:
                this.router.navigate(['login/code2fa'], { state: { data: event.request }});
            break;
            case EAuthenticationEvent.FAILURE:
                console.log('LOGIN FALIUE')
            break;
        }

    }

}