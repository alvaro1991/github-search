import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Repository } from '../types/Repository';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {

  configUrl = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  getTopics(topic: StringConstructor, starsCount: number): Observable<Repository[]> {
    const url = `${this.configUrl}/search/repositories?q=${topic}+stars:>=${starsCount}&per_page=10&type=Repository`
    return this.http.get<Repository[]>(url)
  }

}
