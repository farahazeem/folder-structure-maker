import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { MatInputModule } from '@angular/material/input';
import { MatTreeModule } from '@angular/material/tree';

import { AppComponent } from './app.component';
import { FoldersComponent } from './folders/folders.component';
import { NestedItemDirective } from './nested-item.directive';

@NgModule({
  declarations: [
    AppComponent,
    FoldersComponent,
    NestedItemDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
