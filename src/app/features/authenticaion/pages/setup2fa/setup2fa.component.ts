import { Component, OnInit } from '@angular/core';
import { AuthenticationEvent, AuthenticationRequest } from '../../model/authentication.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { state } from '@angular/animations';

@Component({
    templateUrl: 'setup2fa.component.html',
    styleUrls: ['setup2fa.component.scss']
})
export class Setup2faComponent {

    qrCode: SafeResourceUrl = '';

    request = {};

    constructor(private router: Router, private sanitizer: DomSanitizer) {
        const state: AuthenticationEvent = this.router.getCurrentNavigation()?.extras.state?.['event'];
        this.request = state.request;
        if (state) {
            this.qrCode = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${state.data}`);
        }
    }

    confirm() {
        this.router.navigate(['login/code2fa'], { state: { data: this.request} });
    }

}