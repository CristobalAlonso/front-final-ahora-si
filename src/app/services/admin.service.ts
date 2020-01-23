import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User.model';
import { ReclamoModel } from '../model/Reclamo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
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

  public loginService(lastName:String,email: String,name:String, pass: String, a_section:boolean){
    let body={
      "a_section": a_section,
      "lastname": lastName,
      "mail": email,
      "name": name,
      "pass": pass
    };
    let aux= this.http.post('http://localhost:2020/api/v1/Ejecutivo',body,this.headerOptions);
    return aux;
    console.log(aux);
  }
  public InfoEjecutivo():Observable<User[]>{
    return this.http.get<User[]>('http://localhost:2020/api/v1/Ejecutivo');
  }

  public InfoReclamo():Observable<ReclamoModel[]>{
    return this.http.get<ReclamoModel[]>('http://localhost:2020/api/v1/Reclamo');
  }
}
