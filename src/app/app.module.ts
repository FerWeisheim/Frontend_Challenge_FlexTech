import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PersonaComponent } from './pages/persona/persona.component';
import { AppRoutingModule } from './app-routing.module';
import { ModalAddUpdateComponent } from './Modals/modal-add-update/modal-add-update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from '@angular/cdk/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { AddPersonaComponent } from './Modals/add-persona/add-persona.component';



@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    ModalAddUpdateComponent,
    AddPersonaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DialogModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
