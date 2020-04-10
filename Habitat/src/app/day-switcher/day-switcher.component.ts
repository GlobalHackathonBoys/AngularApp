import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-switcher',
  templateUrl: './day-switcher.component.html',
  styleUrls: ['./day-switcher.component.scss']
})
export class DaySwitcherComponent implements OnInit {
  today: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  changeDate(direction: number): void {
    this.today.setDate(this.today.getDate() + direction)
    this.today = new Date(this.today)
  }

}
