import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FastSvgComponent} from "./fast-svg/fast-svg.component";
import {SvgIconComponent} from "./svg-icon/svg-icon.component";

const routes: Routes = [
  {
    path: 'fast-svg',
    component: FastSvgComponent
  },
  {
    path: 'svg-icon',
    component: SvgIconComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
