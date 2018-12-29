import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abe-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  //Insert logo image Here
  navigation = [
    { link: 'about', label: 'abe.menu.about'},
    { link: 'features', label: 'abe.menu.features' },
    { link: 'examples', label: 'abe.menu.examples' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
