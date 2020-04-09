import { Injectable } from '@angular/core';
import { Task } from '../../../day-planner/day-planner.component'

@Injectable({
  providedIn: 'root'
})
export class DayPlannerService {

  constructor() { }

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
