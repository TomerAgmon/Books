import { takeUntil } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';
import { SplashScreenService } from './core/auth/services/splash-screen.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'books';
  destroy$ = new Subject();

  constructor(
    private splashScreenService: SplashScreenService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.router.events.pipe(takeUntil(this.destroy$)).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.splashScreenService.hide();
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
