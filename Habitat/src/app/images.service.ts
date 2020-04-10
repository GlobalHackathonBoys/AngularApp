import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private httpClient : HttpClient) { }

  private ApiUrl = "http://localhost:5002/images"

  getImages(searchPhrase: string) {

    let param = new HttpParams().set("searchPhrase",searchPhrase)

     return this.httpClient.get<Array<string>>(this.ApiUrl, {params : param})
    

  }
}
