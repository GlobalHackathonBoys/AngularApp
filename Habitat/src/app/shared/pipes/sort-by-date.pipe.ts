
import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../../day-planner/day-planner.component'

@Pipe({
  name: 'sortByDate',
})
export class SortByDatePipe implements PipeTransform {
  transform(tasks: Array<Task>): unknown {
    return tasks.sort((a, b) => {
      if (a.time < b.time) {
        return -1;
      } else if (a.time < b.time) {
        return 1;
      } else {
        return 0;
      }
    });
  }
}
