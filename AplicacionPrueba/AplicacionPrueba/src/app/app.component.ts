import {Component, OnInit} from "@angular/core";
import {Response, Http} from "@angular/http";
import {MasterURLService} from "./services/master-url.service";

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MasterURLService]
})
// CTRL A +  -  CTRL + ALT + L
export class AppComponent implements OnInit {
  title: string = "Hola Amigos";
  nombre: string = "";
  apellido: string = "";
  colorH4 = "red";
  tamanoH4 = "52px";
  classes = "btn btn-block btn-success";

  error: string = "No hay errores";

  nuevaTienda:any={};



  constructor(private _http: Http, private _masterURL:MasterURLService) {
    this.apellido = "Eguez";
    this.nombre = "Adrian";
    console.log("Inicio el construcor")
  }

  ngOnInit() {
    this.apellido = "Sarzosa";
    this.nombre = "Vicente";
    console.log("On Init")
  }

  nombreCompleto(): string {
    return `${this.nombre} ${this.apellido}`
  }

  hizoClick() {
    console.log("Hizo Click");
    console.log()
  }

  hizoFocus() {
    console.log("Hizo focus");
  }

  crearTienda(formulario){
    console.log(formulario);
    this._http.post(this._masterURL.url+"Tienda",{
      nombre:formulario.value.nombre
    }).subscribe(
      (res)=>{
        console.log("No hubo Errores",res);
        this.nuevaTienda={};
      },
      (err)=>{
        console.log("Ocurrio un error",err);
      },
      ()=>{
        console.log("Termino la funcion");
      }
    );

    // this.http
    //   .post("http://localhost:1337/Tienda", formulario.valores)
    //   .subscribe(
    //     res=>console.log('Respuesta: ',res),
    //     err=>console.log('Error: ',err),
    //     ()=>{
    //       console.log("Se completo la accion")
    //     }
    //   );
  }
}
