  import { NgModule } from '@angular/core';  
  import { BrowserModule } from '@angular/platform-browser';
  import { AppComponent } from './app.component';
  import { AppRoutingModule } from './app-routing.module';
  import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './modules/shared/navbar/navbar.component';
import { FooterComponent } from './modules/shared/footer/footer.component';
import { FormsModule } from '@angular/forms';

// FIREBASE -> importamos HERRAMIENTAS de la Base de Datos
import { environment } from 'src/environments/environment'; // vincula a la BD con la APP
import { AngularFireModule } from '@angular/fire/compat'; // trabaja con las colecciones de información
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; // trabaja con la autentificación
import { AngularFireStorageModule } from '@angular/fire/compat/storage'; // trabaja con imágenes y archivos

  @NgModule({
    declarations: [
      AppComponent,
      NavbarComponent,
      FooterComponent,
    ],
    imports: [
     BrowserModule,
      AppRoutingModule,
      MatCardModule,
      BrowserAnimationsModule,
      FormsModule,
      AngularFireModule.initializeApp(environment.firebaseConfig), // Inicializar Firebase dentro del proyecto
      AngularFireAuthModule,
      AngularFireStorageModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
