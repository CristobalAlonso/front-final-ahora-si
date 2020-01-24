import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; //
import { AppComponent } from './app.component';
import { AdmiComponent } from './component/admi/admi.component';
import { HomecentralComponent } from './component/HomeCentral/homecentral.component';
import { LoginComponent } from './component/login/login.component';
import { RegistroComponent} from './component/registro/registro.component';
import { AgregarReclamosComponent } from './component/agregar-reclamos/agregar-reclamos.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistroAdminComponent } from './component/registro-admin/registro-admin.component';
import { EjecutivoAComponent } from './component/ejecutivo-a/ejecutivo-a.component';
import { EjecutivoBComponent } from './component/ejecutivo-b/ejecutivo-b.component';


const appRoutes: Routes = [
  { path: '', component: HomecentralComponent}, //pagina inicio
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'admin', component: AdmiComponent},
  { path: 'usuario/reclamos', component: AgregarReclamosComponent},
  { path: 'ejecutivoA', component: EjecutivoAComponent},
  { path: 'ejecutivoB', component: EjecutivoBComponent},
  { path: 'code/CKS9333ASD/registroAdmin', component: RegistroAdminComponent},
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [
    AppComponent,
    AdmiComponent,
    HomecentralComponent,
    LoginComponent,
    RegistroComponent,
    AgregarReclamosComponent,
    RegistroAdminComponent,
    EjecutivoAComponent,
    EjecutivoBComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(//
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
