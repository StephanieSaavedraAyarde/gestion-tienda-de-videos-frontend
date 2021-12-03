import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FilmModelServer } from '../models/film.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getPremiere(id: Number) {
    return this.http.get('http://localhost:8080/premiere/'+id);
  }

  getLastWeek(id: Number) {
    return this.http.get('http://localhost:8080/lastweek/'+id);
  }

  getAllTimes(id: Number) {
    return this.http.get('http://localhost:8080/alltimes/'+id);
  }

  getSingleFilm(id: Number, country: Number,): Observable<FilmModelServer> {
    return this.http.get<FilmModelServer>('http://localhost:8080/' +country+"/"+ id);
  }
}
