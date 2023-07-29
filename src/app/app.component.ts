import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-observable-lifecycle';
  subscription$: Subscription | undefined;

  ngOnInit() {
    let observable$ = new Observable((observer: any) => {
      // case 1
      // observer.next('A');
      // observer.next('B');
      // observer.error('Error occured.');
      // observer.complete('Data stream is over.');
      // observer.next('C');
      // output: A B

      // case 2
      // observer.next('A');
      // observer.next('B');
      // observer.complete('Data stream is over.');
      // observer.next('C');
      // output: A B

      // case 3
      // observer.next('A');
      // observer.next('B');
      // observer.complete('Data stream is over.');
      // observer.next('C');
      // observer.error('Error occured.');
      // output: A B

      // case 3
      // observer.next('A');
      // observer.next('B');
      // observer.complete('Data stream is over.');
      // observer.error('Error occured.');
      // observer.next('C');
      // output: A B

      // case 4
      observer.next('A');
      observer.next('B');
      observer.next('A');
      observer.next('B');
      setInterval(() => {
        observer.next("This is a random message.");
      }, 2000);
      observer.next('C');
        observer.next('D');
      setInterval(() => {
        observer.error("Error occured.");
      }, 4001);
      observer.next('E');
    });
    // output: A B A B C D E random2 error

    this.subscription$ = observable$.subscribe(function showMessage(msg: any) {
      console.log(msg);
    });
  }

  ngOnDestroy() {
    this.subscription$?.unsubscribe();
  }
}
