import { Component, OnInit } from '@angular/core';
import { ReclamosService } from'../../services/reclamos.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-agregar-reclamos',
  templateUrl: './agregar-reclamos.component.html',
  styleUrls: ['./agregar-reclamos.component.css']
})
export class AgregarReclamosComponent implements OnInit {
	private tipo:string;
	private lugar:string;
	private nota:any;
  private texto:string;

  constructor(
    private reclamos:ReclamosService,
    private http:HttpClient
  ) { }

  ngOnInit() {
  }

  lugar1(){
    document.getElementById('lugarb').innerText='Baquedano';
    this.lugar="Baquedano";
  }
  lugar2(){
    document.getElementById('lugarb').innerText='Estacion central';
    this.lugar="Estacion central";
  }
  lugar3(){
    document.getElementById('lugarb').innerText='Tobalaba';
    this.lugar="Tobalaba";
  }

  nota1(){
    document.getElementById('notab').innerText='1';
    this.nota=1;
  }
  nota2(){
    document.getElementById('notab').innerText='2';
    this.nota=2;
  }
  nota3(){
    document.getElementById('notab').innerText='3';
    this.nota=3;
  }
  nota4(){
    document.getElementById('notab').innerText='4';
    this.nota=4;
  }
  nota5(){
    document.getElementById('notab').innerText='5';
    this.nota=5;
  }
  nota6(){
    document.getElementById('notab').innerText='6';
    this.nota=6;
  }
  nota7(){
    document.getElementById('notab').innerText='7';
    this.nota=7;
  }

  servicio1(){
    document.getElementById('serviciob').innerText='Bienes';
    this.tipo='Bienes';
  }
  servicio2(){
    document.getElementById('serviciob').innerText='Sericios';
    this.tipo='Servicios';
  }
  servicio3(){
    document.getElementById('serviciob').innerText='Empleados';
    this.tipo='Empleados';
  }
  settext(value:string){
    this.texto=value;
  }

  enviarReclamo(){
    let obs=this.reclamos.setReclamo(this.lugar,this.nota,this.texto,this.tipo);
    obs.subscribe(res=>{
      alert('Reclamo enviado');
      window.location.reload();
    });
  }

}
