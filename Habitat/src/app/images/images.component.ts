import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  constructor(private imagesService : ImagesService) { }


  images : string[]

  ngOnInit(): void {
    debugger
    this.imagesService.getImages("rats").subscribe(response => {
      this.images = response as string[]
    })
  }

}
