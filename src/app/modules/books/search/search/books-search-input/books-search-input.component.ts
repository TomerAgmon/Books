import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Output,
  OnDestroy,
  EventEmitter,
  Input,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-books-search-input',
  templateUrl: './books-search-input.component.html',
  styleUrls: ['./books-search-input.component.scss'],
})
export class BooksSearchInputComponent
  implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('input') inputEl: ElementRef;

  @Output() inputChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    fromEvent(this.inputEl.nativeElement, 'input')
      .pipe(
        map((x: any) => {
          const value = this.inputEl.nativeElement.value;
          this.inputChange.emit(value);
        })
      )
      .subscribe(() => {});
  }

  ngOnDestroy(): void {}
}
