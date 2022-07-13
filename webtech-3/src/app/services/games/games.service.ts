import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from "@angular/router";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private apiUrl = 'http://localhost:8000';
  constructor(private router: Router, private http: HttpClient) {  }

  getScores() {
    return this.http.get(`${this.apiUrl}/scores`, {headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }}).pipe(
      map((x) => {
        return x;
        })
    );
  }
  getApiData() {
    return this.http.get(`${this.apiUrl}/api/admin/aggregate`, {headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }}).pipe(
      map((x) => {
        return x;
      })
    );
  }
  getPlayers() {
    return this.http.get(`${this.apiUrl}/api/admin/players`, {headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }}).pipe(
      map((x) => {
        return x;
      })
    );
  }
}
