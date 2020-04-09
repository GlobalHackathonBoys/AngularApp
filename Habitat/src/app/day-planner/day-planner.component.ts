import { Component, OnInit } from '@angular/core';

interface task {
  time: Date,
  title: string,
  description: string,
  isCompleted: boolean
}

@Component({
  selector: 'app-day-planner',
  templateUrl: './day-planner.component.html',
  styleUrls: ['./day-planner.component.scss']
})
export class DayPlannerComponent implements OnInit {
  tasks: Array<task> = [];

  constructor() { }

  ngOnInit(): void {
    this.tasks = this.getTasks();
  }

  getTasks(): Array<task> {
    const tasks: Array<task> = [
      {
        time: new Date(2019, 3, 10, 8, 15),
        title: "Morning stretches",
        description: "Do 15 minutes of morning stretches to help wake up and get the blood flowing.",
        isCompleted: true
      },
      {
        time: new Date(2019, 3, 10, 8, 45),
        title: "Get water",
        description: "Make sure you have a glass of water at your desk ready to start working.",
        isCompleted: false
      }
    ]

    return tasks;
  }

}
