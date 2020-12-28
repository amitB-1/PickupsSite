import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient){}
  //http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=EB1D4FDCE7EC610B55756C578CA78F8C&steamids=76561198042650838
}
