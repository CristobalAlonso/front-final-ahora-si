import { Injectable } from '@angular/core';
import { HttpClient,} from '@angular/common/http'
import { User } from '../model/User.model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private headerOptions={
    headers:{
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, HEAD, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type, Acept, X-Requested-With, X-PINGOTHER'
    }
  }

  constructor(private http: HttpClient) { }

  public loginService(email: String, pass: String){
    let body={
      "contraseñaDto": pass,
      "emailDto": email
    };
    let aux= this.http.post('http://localhost:2020/api/v1/login/session',body,this.headerOptions);
    return aux;
  }

  public loginService2(email: String){
    let body={
      "email": email
    };
    let aux= this.http.post('http://localhost:2020/api/v1/login/onSession',body,this.headerOptions);
    return aux;
  }

  public LoginAdmin(email: String, pass:String){
    let body={
      "contraseñaDto": pass,
      "correoDto": email
    };
    let aux= this.http.post('http://localhost:2020/api/v1/Admin/login',body,this.headerOptions);
    return aux;
  }

  public loginEjecutivo(email: String, pass:String){
    let body={
      "contraseñaDto": pass,
      "correoDto": email
    };
    let aux= this.http.post('http://localhost:2020/api/v1/Admin/login',body,this.headerOptions);
    return aux;
  }
 
  }
