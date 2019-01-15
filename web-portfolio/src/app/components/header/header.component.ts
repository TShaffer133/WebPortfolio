import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'abe-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  //Insert logo image Here
  navigation = [
    { link: 'about', label: 'Resume'},
  ];

  @Output() public openSideNav = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onOpenSideNav = () => {
    this.openSideNav.emit();
  }

}
