import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'la-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.less']
})
export class LogoComponent implements OnInit {
  @Input() logo?: string;
  @Input() href?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
