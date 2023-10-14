import {Component} from '@angular/core';
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {FastSvgComponent} from "@push-based/ngx-fast-svg";
import {SvgIconComponent as SvgIconComponentNg} from "angular-svg-icon";
import {map, take, timer} from "rxjs";

@Component({
  standalone: true,
  templateUrl: './svg-icon.component.html',
  imports: [
    AsyncPipe,
    FastSvgComponent,
    NgForOf,
    NgIf,
    SvgIconComponentNg
  ],
  styleUrls: ['./svg-icon.component.css']
})
export class SvgIconComponent {
  public time$ = timer(0, 2000)
    .pipe(
      take(2),
      map((res) => {
        return res;
      })
    );


  trackBy(index: number) {
    return index;
  }
}
