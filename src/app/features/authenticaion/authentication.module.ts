import { NgModule } from '@angular/core';
import { AuthenticationRoutingModule, LoginRotungModule } from './authentication-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { AuthenticationCompoent } from './authentication.component';
import { LoginComponent } from './pages/login/login.component';
import { Setup2faComponent } from './pages/setup2fa/setup2fa.component';
import { Code2faComponent } from './pages/code2fa/code2fa.component';
import { AuthenticationService } from './service/authentication.service';


@NgModule({
    declarations: [
        AuthenticationCompoent
    ],
    imports: [
        AuthenticationRoutingModule,
        SharedModule,
    ],
    providers: [AuthenticationService]
})
export class AuthenticationModule {

}


@NgModule({
    declarations: [
        LoginComponent,
        Setup2faComponent,
        Code2faComponent
    ],
    imports: [
        LoginRotungModule,
        SharedModule
    ]
})
export class LoginModule {}