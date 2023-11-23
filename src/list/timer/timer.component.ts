import { Component } from '@angular/core';
import {  Subject, Subscription,  interval,  map,  timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
  time : any = '00:00';
  incrementedTime : number = 0;
  timeInterval = interval(1000);
  interValSubs !: Subscription;

  isStarted : boolean = false;
  isStoped : boolean = false;
  status : number = 0;

  constructor(){

  }

  ngOnInit(): void {
    
  }

  start(){
    // disabling start when timer started
    this.isStarted = true;
    this.startSubscription();
  }

  stop(){
    if(!this.isStarted) return;
    this.isStoped = true;
    this.interValSubs?.unsubscribe();
  }

  resume(){
    //To prevent data leaks, timer is resumed only when timer actually stopped 
    // else multiple subscription added over click
    if(this.isStarted && this.isStoped){ 
      this.startSubscription();
      this.isStoped = false;

    }
  }

  reset(){
    this.interValSubs?.unsubscribe();
    this.isStarted = false; // enabling start button after timer is resetted
    this.incrementedTime = 0;
    this.time = '00:00';
  }

  startSubscription(){
    this.interValSubs = this.timeInterval.subscribe((v:any) => {
      this.incrementedTime++;
      const min = Math.floor((this.incrementedTime / 60)).toString().padStart(2, '0');
      const sec = (this.incrementedTime % 60).toString().padStart(2, '0');
      this.time = `${min}:${sec}`;
    });
  }
  
}
