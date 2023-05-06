import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonaInterface } from '../PersonasInterface/PersonaInterface';

@Injectable({
  providedIn: 'root'
})
export class PersonaServiceService {

  constructor(private http:HttpClient) { }

  getFindPersona():Observable<PersonaInterface[]>{
    const Persona = this.http.get<PersonaInterface[]>('https://challengerflextech-production.up.railway.app/Persona/traer');
    return Persona; 

  }


  UpdatePersona(id:number,persona:PersonaInterface){
    return this.http.put(`https://challengerflextech-production.up.railway.app/Persona/editar/${id}`,persona);
  }


  PostPersona(persona:string){
    return this.http.post(`https://challengerflextech-production.up.railway.app/Persona/crear/`,persona);
  }


  DeletePersona(id:number){
    return this.http.delete(`https://challengerflextech-production.up.railway.app/Persona/borrar/${id}`);
  }

}
