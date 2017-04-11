import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import all Components i need in App  
import { DataComponent } from './components/app/app.component';
import { AppDataBindingComponent } from './components/app-data-binding/app-data-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';

// a Decorators to make class "AppModule" to NgModule
@NgModule({
  declarations: [ // specify the Components that i use
    DataComponent, AppDataBindingComponent, EventBindingComponent, TwoWayBindingComponent
      ],
  imports: [ // what modules i use (builtin modules) from angular framework
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [], // service modules 
  bootstrap: [DataComponent] // Bootstraping all my components
})
export class AppModule { }
