import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Guid } from "guid-typescript";
import { Note } from '../../../notes/notes.component';
import { News } from 'src/app/news/news.component';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient : HttpClient) { }

  private ApiUrl = "http://localhost:5002/news"

  getNews(searchPhrase: string) {

    let param = new HttpParams().set("searchPhrase",searchPhrase)

     return this.httpClient.get<Array<News>>(this.ApiUrl, {params : param})
    

  }
}
