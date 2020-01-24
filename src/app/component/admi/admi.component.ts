import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';
import { User } from '../../model/User.model';
import { ReclamoModel } from '../../model/Reclamo.model';

@Component({
  selector: 'app-admi',
  templateUrl: './admi.component.html',
  styleUrls: ['./admi.component.css']
})
export class AdmiComponent implements OnInit {
  private a_section:boolean;
  private nombre:String;
  private apellido:String;
  private correo:String;
  private pass:String;
  private user:Array<User>;
  private reclamo:Array<ReclamoModel>;
  private contador1:any;
  private contador2:any;
  private contador3:any;
  private contador4:any;
  private porcentajes:any;
  private correoDelete: String;
  

  constructor(
    private adminService:AdminService,
    private router:Router
  ) { }

  ngOnInit() {
    this.reqInfoEjecutivo();
    this.reqInfoReclamos();
  }

  seccionA(){
    let doc=document.getElementById('tituloBoton');
    doc.innerText="Sección A";
    this.A_section(true);
  }
  seccionB(){
    let doc=document.getElementById('tituloBoton');
    doc.innerText="Sección B";
    this.A_section(false);
  }

  public A_section(value:boolean){
    this.a_section=value;
  }
  public nombreKeyup(value:String){
    this.nombre=value;
  }
  public apellidoKeyup(value:String){
    this.apellido=value;
  }
  public correoKeyup(value:String){
    this.correo=value;
  }
  public passKeyup(value:String){
    this.pass=value;
  }

  registroEjecutivo(){
    let obs=this.adminService.loginService(this.apellido,this.correo,this.nombre,this.pass, this.a_section);
    obs.subscribe( res =>{
      if(null != res){
        alert("Error de registro");
      
      }else{

        alert('Registro exitoso');
        window.location.reload();
      }
    });
  }

  reqInfoEjecutivo(){
    this.adminService.InfoEjecutivo().subscribe(res =>{
      this.user=res;
    });
  }
  reqInfoReclamos(){
    this.adminService.InfoReclamo().subscribe(res2 =>{
      this.reclamo=res2;
      this.contador1=0;
      this.contador2=0;
      this.contador3=0;
      this.contador4=0;
      for(let i in this.reclamo){
        if(this.reclamo[i].lugar=='Baquedano'){
          this.contador1=this.contador1+1;
        }
        if(this.reclamo[i].lugar=='Estacion central'){
          this.contador2=this.contador2+1;
        }
        if(this.reclamo[i].lugar=='Tobalaba'){
          this.contador3=this.contador3+1;
        }
        this.contador4=this.contador4+1
      }

      this.contador1=(this.contador1*100)/this.contador4
      this.contador2=(this.contador2*100)/this.contador4
      this.contador3=(this.contador3*100)/this.contador4
      this.porcentajes="Baquedano= "+Math.floor(this.contador1)+"%, Estacion central= "+Math.floor(this.contador2)+"%, Tobalaba= "+Math.floor(this.contador3)+"%";
      document.getElementById('text%').innerText=this.porcentajes;
    });
  }

  public eliminarEjecutivo(){
    this.adminService.deleteEjecutivo(this.correoDelete).subscribe(res =>{
    console.log(res);
    });
    this.correoDelete= null;
  }
  public setCorreo(value:String){
    this.correoDelete=value;
  }
}
