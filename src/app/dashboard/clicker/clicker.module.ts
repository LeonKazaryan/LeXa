import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ClickerComponent} from "./clicker.component";

const routes: Routes = [
  {
    path: '',
    component: ClickerComponent
  }
]

@NgModule({
  declarations: [
    ClickerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ClickerModule { }
