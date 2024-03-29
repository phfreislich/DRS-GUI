import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {NodeListComponent} from "./node-list/node-list.component";
import {QuadraticFieldComponent} from "./quadratic-field/quadratic-field.component";
import {interval, Subscription, switchMap} from "rxjs";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NodeListComponent, QuadraticFieldComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy{
// export class AppComponent {

  title = 'Distributed Sound Positioning';

  @ViewChild(QuadraticFieldComponent)
  private quadraticFieldComponent!: QuadraticFieldComponent;


  private subscription!: Subscription;
  private apiUrl: string = 'https://testomat.free.beeceptor.com';  // Replace with your full URL


  // constructor(private http: HttpClient) {}

  ngOnInit() {
    this.startPolling();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe(); // Important to prevent memory leaks
  }
  placePoint() {
    // Example coordinates
    this.quadraticFieldComponent.setPoint(this.getRandomInt(), this.getRandomInt());
  }

  private getRandomInt() : number{
    return Math.floor(Math.random() * 100);
  }

  startPolling() {
    // this.subscription = interval(200).pipe(
    //   switchMap(() => this.http.get<{ x: number, y: number }>('your-api-endpoint'))
    // ).subscribe({
    //   next: (response) => {
    //     this.quadraticFieldComponent.setPoint(response.x, response.y);
    //   },
    //   error: (error) => {
    //     console.error('Error fetching coordinates:', error);
    //   }
    // });
    // this.subscription = interval(200).pipe(
    //   switchMap(() => this.http.get<{ x: number, y: number }>(this.apiUrl))
    // ).subscribe({
    //   next: (response) => {
    //     this.quadraticFieldComponent.setPoint(this.getRandomInt(), this.getRandomInt());
    //   },
    //   error: (error) => {
    //     console.error('Error fetching coordinates:', error);
    //   }
    // });
  }
}
