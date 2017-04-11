import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import all Components i need in App  
import { DataComponent } from './components/app/app.component';
import { AppDevComponent } from './components/app-dev/app-dev.component';
import { OtherComponent } from './components/other/other.component';
import { Other2Component } from './components/other2/other2.component';
import { DatabindingComponent } from './components/databinding/databinding.component'
// a Decorators to make class "AppModule" to NgModule
@NgModule({
  declarations: [ // specify the Components that i use
    DataComponent,
    AppDevComponent,
    OtherComponent,
    Other2Component,
    DatabindingComponent
  ],
  imports: [ // what modules i use (builtin modules) from angular framework
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [], // service modules 
  bootstrap: [DataComponent,AppDevComponent] // Bootstraping all my components
})
export class AppModule { }
