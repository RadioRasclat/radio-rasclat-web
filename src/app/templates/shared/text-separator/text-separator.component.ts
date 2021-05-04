import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-separator',
  templateUrl: './text-separator.component.html',
  styleUrls: ['./text-separator.component.scss'],
})
export class TextSeparatorComponent implements OnInit {
  @Input() text: string;
  @Input() isLink: boolean;
  @Input() isLoading: boolean;
  @Input() border: boolean;
  @Input() active: boolean;
  @Input() url: string;

  constructor() {}

  ngOnInit(): void {}
}
