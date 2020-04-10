import { Component, OnInit } from '@angular/core';
import { DayPlannerService } from '../shared/services/day-planner/day-planner.service';

export interface Task {
  id: number,
  date: Date,
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

  constructor(private dayPlannerService: DayPlannerService) { }

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
    return this.dayPlannerService.getTasks();
  }

}
