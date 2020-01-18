import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'gs-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private profile: any;
  repos: any;

  constructor(private profileService: ProfileService) {
    this.profileService.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });
    this.profileService.getProfileRepos().subscribe(repos=>{
      console.log(repos);
      this.repos = repos;
    })
   }

   findProfile(){
     this.profileService.updateProfile(this.profile.username);
     
     this.profileService.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });
    this.profileService.getProfileRepos().subscribe(repos=>{
      console.log(repos);
      this.repos = repos;
    });
   }

  ngOnInit() {
  }

}
