import { Component, HostListener, ElementRef, OnInit } from '@angular/core';
import {
  animate,
  query,
  style,
  transition,
  trigger,
  stagger,
} from '@angular/animations';

import { Project, code, correlate, collaborate} from './about.data'

@Component({
  selector: 'abe-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('enterAnim', [
      transition(':enter', [
        query('div, h1, h2, .project-card, .sidebar-card', style({transform: 'translateY(-3%)', opacity: 0})),
        query('div, h1, h2, .project-card, .sidebar-card', stagger(75, [
          animate('0.75s ease-in-out', style({transform: 'translateY(0%)', opacity: 1}))
        ]))
      ])
    ]),
  ]
})
export class AboutComponent implements OnInit {
  code: Project[] = code;
  correlate: Project[] = correlate;
  collaborate: Project[] = collaborate;

  showCorrelate = false
  showCollaborate = false

  constructor(public el: ElementRef) { }

//Implements show animation on scroll via hardcoded values. Alter to make dynamic.
  @HostListener('window:scroll', ['$event'])
    checkScroll(){
      const scrollPosition = window.pageYOffset

      if(scrollPosition >= 300) {
        this.showCorrelate = true
      }
      if(scrollPosition >= 1200) {
        this.showCollaborate = true
      }
    }

  ngOnInit() {
  }

}
