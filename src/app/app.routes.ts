import { Routes } from '@angular/router';
import {HomePageComponent} from "./home.page/home.page.component";
import {ShrinkPageComponent} from "./shrink.page/shrink.page.component";

export const routes: Routes = [
  {
    path: ""
    , component: HomePageComponent
  },
  {
    path: "shrink"
    , component: ShrinkPageComponent
  }
];
