import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class GreetingComponent implements OnInit {

  @Input() message: string = ""
  now;
  interval;

  constructor(private cd: ChangeDetectorRef) {
    console.log('GreetingComponent::constructor()');
  }
  ngOnChanges() {
    console.log('GreetingComponent::ngOnChange()');
  }
  ngOnInit() {
    console.log('GreetingComponent::ngOnInit()');
    this.now = new Date().toLocaleTimeString();
    this.interval = setInterval(() => {
      console.log('changing time..');
      this.now = new Date().toLocaleTimeString();
    }, 1000);
  }
  ngDoCheck() {
    console.log('GreetingComponent::ngDoCheck()');
  }
  ngAfterContentInit() {
    console.log('GreetingComponent::ngAfterContentInit()');
  }
  ngOnDestroy() {
    console.log('GreetingComponent::ngOnDestroy()');
    clearInterval(this.interval)
  }
  ngAfterViewInit() {
    console.log('GreetingComponent::ngAfterViewInit()');
  }

  childMethod(){
    console.log('childMethod invoked by parent..');
  }



}
