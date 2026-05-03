import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import e from 'express';
import { count } from 'console';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
isBreadAdded: boolean = false;
islettuceAdded: boolean = false;
islettuce: boolean = false;
isTomatoAdded: boolean = false;
isTomato: boolean = false;
isCheeseAdded: boolean = false;
isCheese: boolean = false;
isMeatAdded: boolean = false;
isMeat: boolean = false;

counterTomato : number = 0;
counterlettuce : number = 0;
counterCheese : number = 0;
counterMeat : number = 0;
breadAdding() {
  this.isBreadAdded = true;
}
breadRemoving() {
  this.isBreadAdded = false;
}
lettuceAdding() {
  this.counterlettuce++;
  this.islettuceAdded = true;
  if (this.counterlettuce > 2) {
    this.islettuce=true;
  }
}
lettuceRemoving() {
  this.counterlettuce--;
  this.islettuce=false;
  if (this.counterlettuce <= 0) {
    this.islettuceAdded = false;
  }
}
tomatoAdding() {
  this.counterTomato++;
  this.isTomatoAdded = true;
  if (this.counterTomato > 2) {
    this.isTomato = true;
  }
}
tomatoRemoving() {
  this.counterTomato--;
  this.isTomato = false;
  if (this.counterTomato <= 0) {
    this.isTomatoAdded = false;
  }
}
cheeseAdding() {
  this.counterCheese++;
  this.isCheeseAdded = true;
  if (this.counterCheese > 2) {
    this.isCheese = true;
  }
}
cheeseRemoving() {
  this.counterCheese--;
  this.isCheese = false;
  if (this.counterCheese <= 0) {
    this.isCheeseAdded = false;
  }
}
meatAdding() {
  this.counterMeat++;
  this.isMeatAdded = true;
  if (this.counterMeat > 2) {
    this.isMeat = true;
  }
}
meatRemoving() {
  this.counterMeat--;
  this.isMeat = false;
  if (this.counterMeat <= 0) {
    this.isMeatAdded = false;
  }
}
}
