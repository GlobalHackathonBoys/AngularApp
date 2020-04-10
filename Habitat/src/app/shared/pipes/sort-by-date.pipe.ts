
import { Pipe, PipeTransform } from '@angular/core';

interface Item {
  date: Date,
  [key: string]: any
}

@Pipe({
  name: 'sortByDate',
})
export class SortByDatePipe implements PipeTransform {
  transform(tasks: Array<Item>): unknown {
    return tasks.sort((a, b) => {
      if (a.date < b.date) {
        return -1;
      } else if (a.date < b.date) {
        return 1;
      } else {
        return 0;
      }
    });
  }
}
