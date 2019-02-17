import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNubmer = 0;

  constructor() {
  }

  ngOnInit() {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNubmer + 1);
      this.lastNubmer++;
    }, 1000);
  }

  onPauseGame() {
    clearInterval(this.interval);
  }

  onResetGame() {
    clearInterval(this.interval);
    this.lastNubmer = 0;
  }

}
