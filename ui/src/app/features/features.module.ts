import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromiseComponent } from './promise/promise.component';
import { AsyncAwaitComponent } from './async-await/async-await.component';
import { ReactiveXComponent } from './reactive-x/reactive-x.component';
import { MaterialModule } from '../core/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [PromiseComponent, AsyncAwaitComponent, ReactiveXComponent],
  imports: [
    FlexLayoutModule,
    MaterialModule,
    CommonModule
  ]
})
export class FeaturesModule { }
