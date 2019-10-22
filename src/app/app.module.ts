import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstCmpComponent } from './first-cmp/first-cmp.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { InterpolationCmpComponent } from './interpolation-cmp/interpolation-cmp.component';
import { PropertyCmpComponent } from './property-cmp/property-cmp.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwowayCmpComponent } from './twoway-cmp/twoway-cmp.component';
import { ExerciseOneComponent } from './exercise-one/exercise-one.component';
import { DirectiveCmpComponent } from './directive-cmp/directive-cmp.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstCmpComponent,
    SecondComponentComponent,
    InterpolationCmpComponent,
    PropertyCmpComponent,
    EventBindingComponent,
    TwowayCmpComponent,
    ExerciseOneComponent,
    DirectiveCmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
