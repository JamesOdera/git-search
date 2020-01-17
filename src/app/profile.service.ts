import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  private clientid:'088761f8956b9ece1dbb';
  private clientsecret:'9f9f07b89d82b755d55281498cf9279ccc03d0a4';

  constructor(private http:HttpClient) { }
}
