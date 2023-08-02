import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../service/aletify.service';

@Component({
  selector: 'app-incio',
  templateUrl: './incio.component.html',
  styleUrls: ['./incio.component.css']
})
export class IncioComponent implements OnInit {
  
  ngOnInit(): void {
    this.confirmar();
  }
  constructor(public alertifyService:AlertifyService){

  }
  confirmar(){
    this.alertifyService.success("Inicio Cargado");
  }
    
}
