import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
title:string="Hola amigos";
 nombre:string="";
 apellido:string="";
colorH4="red";
tamanoH4="30px";
classes="btn btn-block btn-success";
nuevatienda:any={};


 constructor(){
   this.apellido="Toinga";
   this.nombre="Meg";
    console.log("Inicio el constructor");
  }

  ngOnInit(){
    this.apellido="Villafuerte";
    this.nombre="Lucia";
    console.log("On Init");
  }
  nombresss():string{
    return `${this.nombre} ${this.apellido}`;
  }
  clicksss(){
    console.log("Hizo click");
    console.log()
  }
  hizofocus(){
    console.log("Hizo focus");
  }

  crearTienda(formulario){
    // this.http
    //   .post("localhost:1337/Tienda")
    console.log(formulario)
  }
}
