import { Component, OnInit } from '@angular/core';
import {
  animate,
  query,
  style,
  transition,
  trigger,
  stagger,
  state,
  sequence
} from '@angular/animations';

import { Project, code, correlate, collaborate} from './about.data'

@Component({
  selector: 'abe-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('childAnimation', [
      // ...
      state('open', style({
        width: '250px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        width: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('* => *', [
        animate('1s')
      ]),
    ]),
  ],
})
export class AboutComponent implements OnInit {
  code: Project[] = code;
  correlate: Project[] = correlate;
  collaborate: Project[] = collaborate;

  constructor() { }

  ngOnInit() {
  }

}
