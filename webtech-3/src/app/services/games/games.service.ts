import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private apiUrl = ''
  constructor(private http: HttpClient) {}

  games() {
    return this.http.get('http://localhost:8000/scores');
  }
}
