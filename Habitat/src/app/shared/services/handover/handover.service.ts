import { Injectable } from '@angular/core';
import { Handover } from '../../../yesterdays-handover/yesterdays-handover.component';

@Injectable({
  providedIn: 'root'
})
export class HandoverService {

  constructor() { }

  getHandoverNotes(): Handover {
    const handover: Handover = {
      date: new Date(2020, 3, 9),
      notes: "This is an example handover, perhaps you would write down how you felt that day, what work you needed to pick up tomorrow, or a small reminder of something you want to do."
    }
    return handover
  }
}
