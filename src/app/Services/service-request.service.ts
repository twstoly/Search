import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceRequestService {

  user:any = [];
  username : String;
  private clientId = "a9338993b61fb8ac24d6";
  private clientSecret = "b3fc2aaa1bfd22606275fd1d4d94303a4b0621e5";
  
  constructor(private http: HttpClient) {
    this.username = ""
  }
  searchRequest(term: string){

    let promise = new Promise((resolve,reject)=>{
      let apiURL = (environment.apiUrl + term);
      this.http.get(apiURL).toPromise().then(res =>{
          console.log(res);
          this.user = res;

          resolve("Success")
        },
        error=>{
          
          reject(error)
        }
      )
    });
    return promise
  }
  getUserProfileInfo(){
    return this.http.get(environment.apiUrl + this.username + "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret);
  }
  getUserProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos" )
  }
  updatedProfile(username: String){
    this.username = username;
  }
}





























