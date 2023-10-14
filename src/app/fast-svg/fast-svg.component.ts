import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FastSvgComponent as FastSvgComponentNgx} from "@push-based/ngx-fast-svg";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {map, take, timer} from "rxjs";

@Component({
  imports: [
    FastSvgComponentNgx,
    NgForOf,
    NgIf,
    AsyncPipe,
  ],
  standalone: true,
  templateUrl: './fast-svg.component.html',
  styleUrls: ['./fast-svg.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FastSvgComponent {
  public time$ = timer(0, 2000)
    .pipe(
      take(2),
      map((res) => {
        return res;
      })
    );


  trackBy(index: number){
    return index;
  }
}
