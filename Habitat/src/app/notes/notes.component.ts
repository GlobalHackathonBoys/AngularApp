import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Guid } from "guid-typescript";
import { NotesService } from '../shared/services/notes/notes.service';

export interface Note {
  id: Guid,
  date: Date,
  note: string
}

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  trashIcon = faTrash;

  newNote = new FormControl('', Validators.required)
  notes: Array<Note>;

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    this.notes = this.getNotes();
  }

  getNotes(): Array<Note> {
    return this.notesService.getNotes();
  }

  deleteNote(id: Guid): void {
    this.notes = this.notes.filter(x => {
      return x.id !== id
    })
  }

  addNote(): void {
    const newNoteObj: Note = {
      id: Guid.create(),
      date: new Date(),
      note: this.newNote.value
    }

    this.notes.push(newNoteObj);
    this.newNote.reset();
  }

}
