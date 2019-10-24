import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { MyDirectiveDirective } from './my-directive.directive';
import { MyDirectiveTwoDirective } from './my-directive-two.directive';
import { PipeComponentComponent } from './pipe-component/pipe-component.component';
import { CustomPipePipe } from './custom-pipe.pipe';
import { ParentCmp1Component } from './parent-cmp1/parent-cmp1.component';
import { ChildCmp1Component } from './child-cmp1/child-cmp1.component';
import { AssignmentParentCmp1Component } from './assignment-parent-cmp1/assignment-parent-cmp1.component';
import { AssignmentChildCmp1Component } from './assignment-child-cmp1/assignment-child-cmp1.component';
import { ParentCmp2Component } from './parent-cmp2/parent-cmp2.component';
import { ChildCmp2Component } from './child-cmp2/child-cmp2.component';
import { EmpDetailsCmpComponent } from './emp-details-cmp/emp-details-cmp.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpDetailsHttpComponent } from './emp-details-http/emp-details-http.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormCmpComponent } from './reactive-form-cmp/reactive-form-cmp.component';

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
    DirectiveCmpComponent,
    MyDirectiveDirective,
    MyDirectiveTwoDirective,
    PipeComponentComponent,
    CustomPipePipe,
    ParentCmp1Component,
    ChildCmp1Component,
    AssignmentParentCmp1Component,
    AssignmentChildCmp1Component,
    ParentCmp2Component,
    ChildCmp2Component,
    EmpDetailsCmpComponent,
    EmpListComponent,
    EmpDetailsHttpComponent,
    TemplateDrivenFormComponent,
    ReactiveFormCmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
