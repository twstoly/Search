import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Class/user/user';
import { ServiceRequestService } from 'src/app/Services/service-request.service';

@Component({
  selector: 'app-main-control',
  templateUrl: './main-control.component.html',
  styleUrls: ['./main-control.component.css']
})
export class MainControlComponent implements OnInit {

  username!: String;
  userProfile:any = [];
  userRepos:any = [];
  
  constructor(private github: ServiceRequestService){
  }
  findUserProfile(){
    this.github.updatedProfile (this.username);

    this.github.getUserProfileInfo().subscribe(profile=>{
      console.log(profile)
      this.userProfile = profile
    });

    this.github.getUserProfileRepos().subscribe(repos => {
      console.log(repos);
      this.userRepos = repos
    })
  }
 
  ngOnInit() {
    this.username = this.github.user;
  }
  

}
