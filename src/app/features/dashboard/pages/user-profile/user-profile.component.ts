import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { filter, map, switchMap } from 'rxjs';
import { UserProfile } from 'src/app/core/model/user.model';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  userProfile!: UserProfile;

  constructor(private route: ActivatedRoute, private service: UserService) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map((params: ParamMap) => params.get('id')),
      filter(id => id != null),
      map((id: string | unknown) => parseInt(id as string)),
      switchMap(id => this.service.findProfileById(id)))
      .subscribe(data => this.userProfile = data);

  }

}

