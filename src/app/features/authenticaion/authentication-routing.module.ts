import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationCompoent } from './authentication.component';
import { LoginComponent } from './pages/login/login.component';
import { Setup2faComponent } from './pages/setup2fa/setup2fa.component';
import { Code2faComponent } from './pages/code2fa/code2fa.component';

const routes: Routes = [
    {
        path: 'login',
        component: AuthenticationCompoent,
        loadChildren: () => import('./authentication.module').then(m => m.LoginModule)
    },
    {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthenticationRoutingModule {}


const loginRoutes: Routes = [
    {
        path: '', 
        component: LoginComponent
    },
    {
        path: 'setup2fa', 
        component: Setup2faComponent
    },
    {
        path: 'code2fa', 
        component: Code2faComponent
    }
]
@NgModule({
    imports: [RouterModule.forChild(loginRoutes)],
    exports: [RouterModule]
})
export class LoginRotungModule {}