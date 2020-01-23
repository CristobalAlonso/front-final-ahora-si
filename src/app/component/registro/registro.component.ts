import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../../services/registro.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  private a_section:boolean;
  private correo:string;
  private contraseña:string;
  private nombre:string;
  private apellido:string;
  private rut:string;
  private nacimiento:string;
  private contacto:string;

  constructor(
    private registroService:RegistroService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  public a_sectionKeyup(value:boolean){
    this.a_section=value;
  }

  public correoKeyUp(value:string){
    this.correo=value;
  }

  public contrasenaKeyUp(value:string){
    this.contraseña=value;
  }

  public nombreKeyUp(value:string){
    this.nombre=value;
  }

  public apellidoKeyUp(value:string){
    this.apellido=value;
  }
  public rutKeyUp(value:string){
    this.rut=value;
  }
  public nacimientoKeyUp(value){
    this.nacimiento=value;
  }
  public contactoKeyUp(value){
    this.contacto=value;
  }

  public print(){
    console.log(this.correo, this.contraseña ,this.nombre, this.apellido, this.rut, this.nacimiento, this.contacto);
  }

  public registro(){
    let obs=this.registroService.registroService(this.correo,this.contraseña,this.nombre,this.apellido,this.rut,this.contacto,this.nacimiento);
    obs.subscribe(validation => {
      if(null != validation){
        alert("Registro exitoso");
        this.router.navigate(['/login']);
      }
    });
  }
}
