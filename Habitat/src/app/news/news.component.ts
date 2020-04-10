import { Component, OnInit } from '@angular/core';
import { NewsService } from '../shared/services/news/news.service';


export interface News {
  title : string,
  url : string

}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})


export class NewsComponent implements OnInit {

  constructor(private newsService : NewsService) { }


  news : Array<News>

  ngOnInit(): void {

    this.newsService.getNews("smile").subscribe(data => {
      this.news = data as News[]
    })
  }

}
