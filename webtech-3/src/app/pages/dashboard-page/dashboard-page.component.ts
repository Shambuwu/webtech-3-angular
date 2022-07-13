import { Component, OnInit } from '@angular/core';
import {GamesService} from "../../services/games/games.service";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  constructor(private service: GamesService) { }

  allGames: any = [];

  ngOnInit(): void {
    this.games();
  }

  games(): void {
    this.service
      .games()
      .subscribe((response: any) => {
        this.allGames = response.data;
      });
    console.log(this.allGames);
    console.log("googa choopna");
  }

}
