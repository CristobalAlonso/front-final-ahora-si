import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReclamosService {
  private headerOptions={
    headers:{
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, HEAD, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type, Acept, X-Requested-With, X-PINGOTHER'
    }
  }

  constructor(
    private http:HttpClient
  ) { }

  setReclamo(lugar:string,nota:any,texto:string,tipo:string,mailUser:string){
    let body={
      "id": null,
      "lugar": lugar,
      "mailEjecutivo": null,
      "mailUser": mailUser,
      "nota": nota,
      "texto": texto,
      "tipo": tipo
    }
    let aux= this.http.post('http://localhost:2020/api/v1/Reclamo',body,this.headerOptions);
    return aux;
  }
}
