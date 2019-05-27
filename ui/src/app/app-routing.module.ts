import { ReactiveXComponent } from './features/reactive-x/reactive-x.component';
import { PromiseComponent } from './features/promise/promise.component';
import { AsyncAwaitComponent } from './features/async-await/async-await.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AsyncAwaitComponent,
  },
  {
    path: 'async-await',
    component: AsyncAwaitComponent,
  },
  {
    path: 'promise',
    component: PromiseComponent,
  },
  {
    path: 'reactivex',
    component: ReactiveXComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
