import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abe-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  //Insert logo image Here
  navigation = [
    { link: 'about', label: 'about'},
    { link: 'features', label: 'features' },
    { link: 'examples', label: 'examples' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
