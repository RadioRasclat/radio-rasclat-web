import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-seperator',
  templateUrl: './text-seperator.component.html',
  styleUrls: ['./text-seperator.component.scss'],
})
export class TextSeperatorComponent implements OnInit {
  @Input() text: string;
  @Input() isLink: boolean;
  @Input() isLoading: boolean;
  @Input() border: boolean;
  @Input() active: boolean;
  @Input() url: string;

  constructor() {}

  ngOnInit(): void {}
}
