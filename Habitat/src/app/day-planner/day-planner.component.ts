import { Component, OnInit } from '@angular/core';

export interface Task {
  id: number,
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
  tasks: Array<Task> = [];

  constructor() { }

  ngOnInit(): void {
    this.tasks = this.getTasks();
  }

  isOverdue(date: Date): boolean {
    // this would have to check against the current time in a real app
    const now = new Date(2020, 3, 10, 9, 30)
    return now > date
  }

  updateTask(id: number): void {
    let task = this.tasks.find(task => task.id === id)
    task.isCompleted = !task.isCompleted
  }

  getTasks(): Array<Task> {
    const tasks: Array<Task> = [
      {
        id: 1,
        time: new Date(2020, 3, 10, 8, 15),
        title: "Morning stretches",
        description: "Do 15 minutes of morning stretches to help wake up and get the blood flowing.",
        isCompleted: false
      },
      {
        id: 4,
        time: new Date(2020, 3, 10, 11, 0),
        title: "Top up water",
        description: "Refill your glass, if you haven't finished it yet, down it!",
        isCompleted: false
      },
      {
        id: 2,
        time: new Date(2020, 3, 10, 8, 45),
        title: "Get water",
        description: "Make sure you have a glass of water at your desk ready to start working.",
        isCompleted: true
      },
      {
        id: 3,
        time: new Date(2020, 3, 10, 10, 0),
        title: "Take a break",
        description: "Spend 5 minutes away from your desk, make a coffee or get some fruit.",
        isCompleted: false
      },
      {
        id: 5,
        time: new Date(2020, 3, 10, 12, 30),
        title: "Lunch time",
        description: "Get yourself something nice to eat, you've earned it! Try to do 15 minutes of exercise if you can too.",
        isCompleted: false
      },
    ]

    return tasks;
  }

}
