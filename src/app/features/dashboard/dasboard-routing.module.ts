import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';


const routes: Route[] = [
    { path: 'profile/:id' , component: UserProfileComponent }
]


@NgModule({

    imports:[RouterModule.forChild(routes)], 
    exports: [RouterModule]

})

export class DasboardRoutingModule {}