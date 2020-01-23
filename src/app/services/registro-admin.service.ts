import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RegistroAdminService {
  private headerOptions={
    headers:{
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, HEAD, DELETE, PUT',
      'Access-Control-Allow-Headers': 'Content-Type, Acept, X-Requested-With, X-PINGOTHER'
    }
  }

  constructor(private http:HttpClient) { }

  public registroService(correo: String, contraseña: String, nombre: String){
    let body={
      "contraseña": contraseña,
      "correo": correo,
      "nombre": nombre
    };
    let aux= this.http.put('http://localhost:2020/api/v1/Admin',body,this.headerOptions);
    return aux;
  }
}
