import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { UserInfo } from 'src/app/core/model/identity.model';
import { UserService } from 'src/app/core/service/user.service';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    userInfo: UserInfo = {};

     @ViewChild('drawer')
     public drawer!: MatDrawer;

    constructor(private userService: UserService) { }

    ngOnInit(): void {
        
        this.userService.getUserInfo()
        .subscribe(data => this.userInfo = data);

    }
}