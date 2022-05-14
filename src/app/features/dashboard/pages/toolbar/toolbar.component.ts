import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { UserInfo } from 'src/app/core/model/identity.model';
import { SecurityService } from 'src/app/core/service/security.service';


@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html'
})
export class ToolbarComponent implements OnChanges {

    @Input()
    userInfo!: UserInfo;

    @Input()
    drawer!: MatDrawer;

    constructor(private tokenService: SecurityService, private router: Router) { }
    
    ngOnChanges(changes: SimpleChanges): void {
        this.userInfo.profilePicture = './assets/avatar.png'
    }

    logout(): void {
        this.tokenService.clearToken();
        this.router.navigate(['login']);
    }


    toogleSideNav() {
        this.drawer.toggle();
    }

}