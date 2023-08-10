import { AfterContentInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'la-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.less']
})
export class EditorComponent implements OnInit, AfterContentInit {
  @ViewChild('container', { static: true }) container!: ElementRef<HTMLDivElement>;
  @Input() value!: string;
  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {

  }
}
