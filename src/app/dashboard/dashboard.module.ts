import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { DashboardComponent } from "./dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'battle',
        loadChildren: () => import('./battle/battle.module').then(m=>m.BattleModule)
      },
      {
        path: 'clicker',
        loadChildren: () => import('./clicker/clicker.module').then(m=>m.ClickerModule)
      },
      {
        path: 'collection',
        loadChildren: () => import('./collection/collection.module').then(m=>m.CollectionModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m=>m.ProfileModule)
      },
    ]
  }
]

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
