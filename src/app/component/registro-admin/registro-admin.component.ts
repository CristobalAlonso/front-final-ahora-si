import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistroAdminService } from '../../services/registro-admin.service';

@Component({
  selector: 'app-registro-admin',
  templateUrl: './registro-admin.component.html',
  styleUrls: ['./registro-admin.component.css']
})
export class RegistroAdminComponent implements OnInit {
  private correo:string;
  private contraseña:string;
  private nombre:string;

  constructor( 
    private registroAdminService:RegistroAdminService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  correoKeyup(value:string){
    this.correo=value;
  }
  contrasenaKeyup(value:string){
    this.contraseña=value;
  }
  nombreKeyup(value:string){
    this.nombre=value;
  }

  public registro(){
    let obs=this.registroAdminService.registroService(this.correo,this.contraseña,this.nombre);
    obs.subscribe(validation => {
      if(null != validation){
        alert("Registro exitoso");
        this.router.navigate(['/login']);
      }
    });
  }
}
