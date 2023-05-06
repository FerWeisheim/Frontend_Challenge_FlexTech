import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PersonaInterface } from 'src/app/PersonasInterface/PersonaInterface';
import { PersonaServiceService } from 'src/app/PersonasService/persona-service.service';
import { Chart,ChartConfiguration,ChartData,registerables } from 'node_modules/chart.js';
import { MatDialog } from '@angular/material/dialog';
import { ModalAddUpdateComponent } from 'src/app/Modals/modal-add-update/modal-add-update.component';
import { AddPersonaComponent } from 'src/app/Modals/add-persona/add-persona.component';
Chart.register(...registerables)

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})


export class PersonaComponent implements OnInit{

  cuentas: { [pais: string]: number } = {};
  personaSeleccionada: any;



  ListadoDePersonas:PersonaInterface[]=[];
  contadorPersona=0;
  PaisesAContar:[]=[];
  AllPersonas:[]=[];
  constructor(private http:HttpClient,private PersonaService:PersonaServiceService,  public dialog: MatDialog,){

  }
  ngOnInit(): void {
    this.RenderBubblechart();
    this.filterPaisePersona();
  }
  



  
  
RenderBubblechart(){
  this.filterPaisePersona();
  this.PersonaService.getFindPersona()
  .subscribe(data => {
    this.ListadoDePersonas = data;
    const chartData: ChartData = {
      labels: Object.keys(this.cuentas),
      datasets: [{
        label: 'Personas',
        data:Object.values(this.cuentas),
        backgroundColor: "#4897C2",
        borderWidth: 1,
        borderRadius: 10
      }]
    };
    const chartConfig: ChartConfiguration = {
      type: 'bar',
      data: chartData,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };
    new Chart("bubchart", chartConfig);
  });
}

  filterPaisePersona(){
    
  this.PersonaService.getFindPersona().subscribe(res=>{
      this.ListadoDePersonas=res,
      this.ListadoDePersonas.forEach(persona => {
        if (this.cuentas[persona.pais]) {
          this.cuentas[persona.pais]++;
        } else {
          this.cuentas[persona.pais] = 1;
        }
       
      });
    })
  
}
    
openDialog(){
  const dialogRef = this.dialog.open(ModalAddUpdateComponent, {
    data: {
       persona: this.personaSeleccionada 
      }
  });
}
openDialogCreatePersona(){
  const dialogRef = this.dialog.open(AddPersonaComponent, {});
}
openDelete(){


  const url = window.location.href;
  const path = url.replace("http://localhost:4200", "");
  
  const result = confirm("¿Está seguro que desea eliminar?");

  if(result){
    this.PersonaService.DeletePersona(this.personaSeleccionada.id).subscribe(
      res=>{this.ListadoDePersonas!=res
      location.reload()}
    )
  }
/*   alert("ESTAS SEGURO DE ELIMINAR EL REGISTRO?")
   this.PersonaService.DeletePersona(this.personaSeleccionada.id)
     console.log();  
    
  }; */

}
}
