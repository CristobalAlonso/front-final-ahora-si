import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private headerOptions={
    headers:{
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, HEAD, DELETE, PUT',
      'Access-Control-Allow-Headers': 'Content-Type, Acept, X-Requested-With, X-PINGOTHER'
    }
  }

  constructor(private http: HttpClient) { }

  
public registroService(correo: String, contraseña: String, nombre: String, apellido: String, rut: String, contacto, edad){
  let body={
    "apellido": apellido,
    "contraseña": contraseña,
    "edad": edad,
    "email": correo,
    "nombre": nombre,
    "numero": contacto,
    "rut": rut
  };
  let aux= this.http.post('http://localhost:2020/api/v1/login',body,this.headerOptions);
  return aux;
  }
}
