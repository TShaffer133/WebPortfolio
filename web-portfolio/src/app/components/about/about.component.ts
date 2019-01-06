import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abe-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  code = [
    { title: 'Perceptron', description: 'About'},
    { title: 'mARkit', description: 'Portfolio' },
    { title: 'This Website', description: 'Blog' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
