import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  // This is number we are passing in from outside into this component, so
  // we must decorate it with @Input() so we can pass data in.
  @Input() number: number;

  constructor() { }

  ngOnInit(): void {
  }

}
