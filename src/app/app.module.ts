  import { NgModule } from '@angular/core';  
  import { BrowserModule } from '@angular/platform-browser';
  import { AppComponent } from './app.component';
  import { AppRoutingModule } from './app-routing.module';
  import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

  @NgModule({
    declarations: [
      AppComponent,
      
    ],
    imports: [
     BrowserModule,
      AppRoutingModule,
      MatCardModule,
      BrowserAnimationsModule

    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
