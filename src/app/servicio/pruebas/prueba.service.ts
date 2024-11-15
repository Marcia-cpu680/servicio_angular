import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  constructor( private http: HttpClient) { }

  invocable_1(){
    let dato= "Funcion 1 invocada";
    return dato;
  }
  invocable_2(){
    let dato= "Funcion 2 invocada";
    return dato;
  }
  invocable_3(){
  let dato= "Funcion 3 invocada";
  return dato;
  }
  sumar(numero:any){
   let num=4;
   let total=numero+num;
   return total;
  }
  promedio(nota1:number, nota2:number){
    let promedio:number;
    promedio=(nota1+nota2)/2;
    return promedio;


  }
}
