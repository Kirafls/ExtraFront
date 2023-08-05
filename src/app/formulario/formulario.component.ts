import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../service/aletify.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{
  ngOnInit(): void {
    this.alertify.success("Contenido cargado");
  }
  constructor(public alertify:AlertifyService){

  }
  get nombre(){
    return this.formAlumno.get("nombre") as FormControl;
  }
  get apellido(){
    return this.formAlumno.get("apellido") as FormControl;
  }
  get promedio(){
    return this.formAlumno.get("promedio") as FormControl;
  }
  get prepa(){
    return this.formAlumno.get("prepa") as FormControl;
  }
  get fechan(){
    return this.formAlumno.get("fechan") as FormControl;
  }
  get carrera(){
    return this.formAlumno.get("carrera") as FormControl;
  }
  formAlumno=new FormGroup({
    "nombre":new FormControl("",Validators.required),
    "apellido":new FormControl("",Validators.required),
    "promedio":new FormControl("",[Validators.required,Validators.max(10),Validators.min(0)]),
    "prepa": new FormControl("",Validators.required),
    "fechan": new FormControl("",Validators.required),
    "carrera": new FormControl("",Validators.required),

  });
  nuevoAspirante(){
    if(this.formAlumno.valid){
      this.alertify.success("Los datos se han guardado correctamente...");
    }
    else{
      this.alertify.message("Faltan campos por validad");
      this.alertify.error("Faltan campos");
    }
    
  }
}
