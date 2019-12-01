import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FreeapiServiceService {  

  constructor(private httpcLient : HttpClient) { }



  getComments(): Observable<any>{
return this.httpcLient.get("https://gist.githubusercontent.com/dabalyan/eeacdd4fd86b4a844f48a75d134d9f10/raw/035f6e2db6c97ff3bf1050df6497840ba90cae3d/menuData.json");

  }

}
