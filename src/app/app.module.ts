  import { NgModule } from '@angular/core';  
  import { BrowserModule } from '@angular/platform-browser';
  import { AppComponent } from './app.component';
  import { AppRoutingModule } from './app-routing.module';
  import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './modules/shared/navbar/navbar.component';
import { FooterComponent } from './modules/shared/footer/footer.component';
  @NgModule({
    declarations: [
      AppComponent,
      NavbarComponent,
      FooterComponent
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
