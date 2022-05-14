import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DasboardRoutingModule } from './dasboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SideNavComponent } from './pages/sidenav/sidenav.component';
import { ToolbarComponent } from './pages/toolbar/toolbar.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';


@NgModule({
    declarations: [
        DashboardComponent,
        ToolbarComponent,
        SideNavComponent,
        UserProfileComponent
    ],
    imports :[
        SharedModule,
        DasboardRoutingModule
    ]
})
export class DashboardModule {}