import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  private clientid:'088761f8956b9ece1dbb';
  private clientsecret:'9f9f07b89d82b755d55281498cf9279ccc03d0a4';

  constructor(private http:HttpClient) {
    console.log("service is now ready!");
    this.username = 'JamesOdera';
   }

   getProfileInfo(){
     return this.http.get("https://api.github.com/users/" + this.username + "?client id=" + this.clientid + "&client_secret=" + this.clientsecret)
    //  .map(res => res.json());
   };


   updateProfile(username: string){
     this.username = username;
   }

}
