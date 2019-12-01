import { Component } from '@angular/core';
import { FreeapiServiceService } from './freeapi-service.service'
import { Comment } from './classes/comment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _freeapiserviceService: FreeapiServiceService) { }
  listComments: Comment[];
  ngOnInit() {

    this._freeapiserviceService.getComments()
      .subscribe(data => {
        this.listComments= data;

      })
  }

}
