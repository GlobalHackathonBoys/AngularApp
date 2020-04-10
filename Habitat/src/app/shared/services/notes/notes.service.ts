import { Injectable } from '@angular/core';
import { Guid } from "guid-typescript";
import { Note } from '../../../notes/notes.component';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor() { }

  getNotes(): Array<Note> {
    const notes: Array<Note> = [
      {
        id: Guid.create(),
        date: new Date(2020, 3, 10, 9, 13),
        note: "Call Dave at 1pm to find out where he's at with CUS-1234."
      },
      {
        id: Guid.create(),
        date: new Date(2020, 3, 10, 11, 56),
        note: "Check PR's from Jess."
      },
      {
        id: Guid.create(),
        date: new Date(2020, 3, 10, 8, 3),
        note: "Update docker at end of the day."
      },
    ]

    return notes
  }
}
