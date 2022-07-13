import { Component, OnInit } from '@angular/core';
import {GamesService} from "../../services/games/games.service";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  constructor(private service: GamesService) { }

  userScores: any = [];
  players: any = [];
  apiData: any = [];

  ngOnInit(): void {
    this.scores();
    this.getPlayers();
    this.getApiData();
  }

  scores(): void {
    this.service
      .getScores()
      .subscribe((response: any) => {
        this.userScores = response;
      });
  }

  getPlayers(): void {
    this.service
      .getPlayers()
      .subscribe((response: any) => {
        this.players = response;
      });
  }

  getApiData(): void {
    this.service
      .getApiData()
      .subscribe((response: any) => {
        this.apiData = response;
      });
  }


}
