import { Component } from '@angular/core';
import { Empleado} from './modelos/empleados';
import { IfStmt } from '@angular/compiler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  empleadoArray: Empleado[]=[
    {id:1, nombre:"Felipe", pais:"Chile"},
    {id:2, nombre:"Juan", pais:"Japon"},
    {id:3, nombre:"Samatha", pais:"HAity"},
  ];

  selectedEmpleado: Empleado = new Empleado();
  abrirParaEditar(empleados: Empleado){
    this.selectedEmpleado = empleados;


  }



  addOrEdit(){
    if(this.selectedEmpleado.id===0){
    this.selectedEmpleado.id = this.empleadoArray.length+1;
    this.empleadoArray.push(this.selectedEmpleado);
    
  }
  this.selectedEmpleado = new Empleado();
  }

  borrar(){
    if(confirm('confirma eliminar el registro ?')){
    this.empleadoArray = this.empleadoArray.filter(x => x != this.selectedEmpleado);
    this.selectedEmpleado = new Empleado();
  }
  }



}