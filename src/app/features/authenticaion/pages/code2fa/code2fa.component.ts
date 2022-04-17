import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, EMPTY, filter, mergeMap, of } from 'rxjs';
import { EAuthenticationEvent } from 'src/app/core/enum/enum.authentication-event';
import { AuthenticationRequest } from '../../model/authentication.model';
import { AuthenticationService } from '../../service/authentication.service';


@Component({
    templateUrl: './code2fa.component.html',
    styleUrls: ['./code2fa.component.scss']
})
export class Code2faComponent {

    code2fa: FormControl = new FormControl();

    request: AuthenticationRequest = { username: '', password: '' };

    constructor(private router: Router, private service: AuthenticationService) {
        this.request = this.router.getCurrentNavigation()?.extras.state?.['data'];
        this.code2fa.valueChanges
            .pipe(
                filter(code => code.length == 6),
                mergeMap(code => this.service.authenticate(this.request, code)),
                catchError(err => of({token: '', status: '', message: err.message, qrCode: ''})
            ))
            .subscribe({
                next: data => this.service.publishEvent({ type: EAuthenticationEvent.SUCCESS, data: data.token, request: this.request })
            });

    }
}