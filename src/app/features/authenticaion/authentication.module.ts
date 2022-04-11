import { NgModule } from '@angular/core';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { AuthenticationCompoent } from './authentication.component';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
    declarations: [
        AuthenticationCompoent,
        LoginComponent
    ],
    imports: [
        AuthenticationRoutingModule,
        SharedModule,
    ]
})
export class AuthenticationModule {

}