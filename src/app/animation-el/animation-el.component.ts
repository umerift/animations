import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-animation-el',
  templateUrl: './animation-el.component.html',
  styleUrls: ['./animation-el.component.scss'],
  animations: [
    trigger('loadingAnim', [
      state(
        'circle',
        style({
          width: '40px',
          'border-color': '#bbbbbb',
          'border-width': '3px',
          'font-size': '0',
          'border-left-color': '#1ECD97',
          'border-radius': '40px',
          animation: ' rotating 1s 0.25s linear infinite',
        }),
      ),
      state(
        'button',
        style({
          'font-size': '13px',
          color: 'white',
          background: '#1ECD97',
        }),
      ),
    ]),
    trigger('openClose', [
      // animation triggers go here
      state(
        'open',
        style({
          height: '200px',
          opacity: 1,
          backgroundColor: 'yellow',
        }),
      ),
      state(
        'closed',
        style({
          height: '100px',
          opacity: 0.5,
          backgroundColor: 'green',
        }),
      ),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),
  ],
})
export class AnimationElComponent {
  isOpen = true;
  text = 'Submit';

  toggle() {
    this.isOpen = !this.isOpen;
    setTimeout(() => {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        this.text = 'done';
      }
    }, 5000);
  }
}
