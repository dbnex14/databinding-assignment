import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  // Decorate event emitter with @Output so it can be cought outside of 
  // this component.  We can then listen to this event now from other
  // components using this component.  See app.component.html.
  // Also, this event emitter expects to receive a number which we can 
  // pass using $event.
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNumber: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  // when starting game, we should emit an event
  onStartGame() {
    this.interval = setInterval(() => 
    { 
      // here we want to emit intervalFired event and increment
      this.intervalFired.emit(++this.lastNumber);
    }, 1000);
  }

  onPauseGame() {
    clearInterval(this.interval);
  }
}
