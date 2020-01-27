import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import {ReclamoModel} from '../../model/Reclamo.model';

@Component({
  selector: 'app-ejecutivo-a',
  templateUrl: './ejecutivo-a.component.html',
  styleUrls: ['./ejecutivo-a.component.css']
})
export class EjecutivoAComponent implements OnInit {
  private idSearch:number;
  private reclamo:Array<ReclamoModel>;

  constructor(
    private adminService:AdminService
  ) { }

  ngOnInit() {
    this.reqInfoReclamos();
  }

  reqInfoReclamos(){
    this.adminService.InfoReclamo().subscribe(res2 =>{
      this.reclamo=res2;
      
    });
  }

  setIdSearch(value:number){
    this.idSearch=value;
    this.idSearch-=1;
    console.log(this.idSearch);
  }
  
  getReclamo2(){
    document.getElementById('id').innerText=this.reclamo[this.idSearch].id;
    document.getElementById('lugar').innerText=this.reclamo[this.idSearch].lugar;
    document.getElementById('nota').innerText=this.reclamo[this.idSearch].nota;
    document.getElementById('categoria').innerText=this.reclamo[this.idSearch].tipo;
    document.getElementById('texto').innerText=this.reclamo[this.idSearch].texto;
  }

}
