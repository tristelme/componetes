import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/shared/shared.module';
// FIREBASE -> importamos HERRAMIENTAS de la Base de Datos
import { environment } from 'src/environments/environment'; // vincula a la BD con la APP
import { AngularFireModule } from '@angular/fire/compat'; // trabaja con las colecciones de información
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; // trabaja con la autentificación
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { ContactoComponent } from './modules/contacto/contacto.component';
import { AcercaDeComponent } from './modules/acerca-de/acerca-de.component';
import { ServiciosComponent } from './modules/servicios/servicios.component';
@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    AcercaDeComponent,
    ServiciosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // COMPONENTES GLOBALES
    SharedModule,
    // VINCULACIÓN CON FIREBASE
     AngularFireModule.initializeApp(environment.firebaseConfig), // Inicializar Firebase dentro del proyecto
     AngularFireAuthModule,
     AngularFireStorageModule,
     FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }