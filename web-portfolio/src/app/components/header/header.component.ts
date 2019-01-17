import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'abe-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() public openSideNav = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onOpenSideNav = () => {
    this.openSideNav.emit();
  }

}
