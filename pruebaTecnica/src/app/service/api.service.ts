import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = environment.URL;
  constructor() { }

  async getData(){
    console.log("Get Data");
    let response = await fetch(this.url);
    let data = await response.json();
    return data
  }
}
