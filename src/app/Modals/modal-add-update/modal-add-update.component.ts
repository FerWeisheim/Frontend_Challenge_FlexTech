
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaServiceService } from 'src/app/PersonasService/persona-service.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-modal-add-update',
  templateUrl: './modal-add-update.component.html',
  styleUrls: ['./modal-add-update.component.css']
})
export class ModalAddUpdateComponent {
  datePipe: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private personaService:PersonaServiceService,private fb:FormBuilder) {
    this.perfil = this.fb.group(
      {
        id:[],
        nombre: ['', Validators.required],
        apellido: ['', Validators.required],
        direccion:['',Validators.required],
        fecha_nacimiento: ['', Validators.required],
        pais: ['', Validators.required],
        telefono: ['', Validators.required],
      }
   
    )
  }
 perfil: FormGroup = new FormGroup({});

 ngOnInit() {
const personaSeleccionadaDeLaLista= this.data.persona;
  const fecha = formatDate(this.data.persona.fecha_nacimiento, 'dd/MM/yyyy', 'en-US');
  this.perfil.patchValue({
    id:personaSeleccionadaDeLaLista.id,
    nombre:personaSeleccionadaDeLaLista.nombre,
    apellido:personaSeleccionadaDeLaLista.apellido,
    fecha_nacimiento:fecha,
    direccion:personaSeleccionadaDeLaLista.direccion,
    pais:personaSeleccionadaDeLaLista.pais,
    telefono:personaSeleccionadaDeLaLista.telefono,
  })
 
 


}
    updateProfile() {
  this.personaService.UpdatePersona(this.data.persona.id,this.perfil.getRawValue()).subscribe(
    res=>{
      location.reload()
    }
  )

  }  
 
}
