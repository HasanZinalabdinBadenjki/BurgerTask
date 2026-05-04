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
  this.isCheese=true;
  this.islettuce=true;
  this.isTomato=true;
  this.isMeat=true;
}
breadRemoving() {
  this.isBreadAdded = false;
  this.islettuceAdded = false;
  this.islettuce = false;
  this.isTomatoAdded = false;
  this.isTomato = false;
  this.isCheeseAdded = false;
  this.isCheese = false;
  this.isMeatAdded = false;
  this.isMeat = false;
  this.counterTomato = 0;
  this.counterlettuce = 0;
  this.counterCheese = 0;
  this.counterMeat = 0;
}
cheeseAdding() {
  this.counterCheese++;
  this.isCheeseAdded = true;
  if (this.counterCheese > 2) {
    this.isCheese = false;
  }
}
cheeseRemoving() {
  this.counterCheese--;
  this.isCheese = true;
  if (this.counterCheese <= 0) {
    this.isCheeseAdded = false;
  }
}
lettuceAdding() {
  this.counterlettuce++;
  this.islettuceAdded = true;
  if (this.counterlettuce > 2) {
    this.islettuce=false;
  }
}
lettuceRemoving() {
  this.counterlettuce--;
  this.islettuce=true;
  if (this.counterlettuce <= 0) {
    this.islettuceAdded = false;
  }
}

tomatoAdding() {
  this.counterTomato++;
  this.isTomatoAdded = true;
  if (this.counterTomato > 2) {
    this.isTomato = false;
  }
}
tomatoRemoving() {
  this.counterTomato--;
  this.isTomato = true;
  if (this.counterTomato <= 0) {
    this.isTomatoAdded = false;
  }
}

meatAdding() {
  this.counterMeat++;
  this.isMeatAdded = true;
  if (this.counterMeat > 2) {
    this.isMeat = false;
  }
}
meatRemoving() {
  this.counterMeat--;
  this.isMeat = true;
  if (this.counterMeat <= 0) {
    this.isMeatAdded = false;
  }
}

}
