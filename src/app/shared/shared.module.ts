import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';
@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  declarations: [],
  exports: [FlexLayoutModule,
    CommonModule,

    BrowserAnimationsModule,
    MaterialModule]
})
export class SharedModule { }
