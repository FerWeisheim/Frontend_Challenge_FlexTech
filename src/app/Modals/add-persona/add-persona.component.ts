import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaServiceService } from 'src/app/PersonasService/persona-service.service';

@Component({
  selector: 'app-add-persona',
  templateUrl: './add-persona.component.html',
  styleUrls: ['./add-persona.component.css']
})
export class AddPersonaComponent {



  constructor(private personaService:PersonaServiceService,private fb:FormBuilder) {
   
  }
 perfil: FormGroup = new FormGroup({});

 ngOnInit() {
  this.perfil = this.fb.group(
    {
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      direccion:['',Validators.required],
      fecha_nacimiento: ['', Validators.required],
      pais: ['', Validators.required],
      telefono: ['', Validators.required],
    }
 
  )
 


}
    updateProfile() {

  this.personaService.PostPersona(this.perfil.getRawValue()).subscribe(
    res=>{
      console.log(res);
    }
  )

  }  
}
