import { Component, OnInit } from '@angular/core';
import { HandoverService } from '../shared/services/handover/handover.service';

export interface Handover {
  date: Date,
  notes: string
}

@Component({
  selector: 'app-yesterdays-handover',
  templateUrl: './yesterdays-handover.component.html',
  styleUrls: ['./yesterdays-handover.component.scss']
})
export class YesterdaysHandoverComponent implements OnInit {
  handover: Handover;

  constructor(private handoverService: HandoverService) { }

  ngOnInit(): void {
    this.handover = this.getHandover();
  }

  getHandover(): Handover {
    return this.handoverService.getHandoverNotes()
  }

}
