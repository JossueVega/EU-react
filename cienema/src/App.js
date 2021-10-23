import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componentes/Header';
import Peliculas from './componentes/Peliculas';
import Recibo from './componentes/Recibo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      compra:{},
      cartelera:[
        {codigo:1,nombre:"Halloween Kills", idioma:'SUB', clasificacion:'C',horarios:['13:00','17:50','20:30'],duracion:'106 min',url:'https://static.cinepolis.com/img/peliculas/37049/1/1/37049.jpg'},
        {codigo:2,nombre:"Los Locos Addams 2", idioma:'ESP', clasificacion:'A',horarios:['9:00','11:30','13:30'],duracion:'93 min',url:'https://static.cinepolis.com/img/peliculas/37048/1/1/37048.jpg'},
        {codigo:3,nombre:"Sin Tiempo Para Morir", idioma:'ESP', clasificacion:'B',horarios:['11:00','13:50','19:40'],duracion:'164 min',url:'https://static.cinepolis.com/img/peliculas/36792/1/1/36792.jpg'},
        {codigo:4,nombre:"Venom: Carnage Liberado", idioma:'ESP', clasificacion:'B',horarios:['10:30','14:20','18:30'],duracion:'98 min',url:'https://static.cinepolis.com/img/peliculas/36934/1/1/36934.jpg'},
      ],
    };
 
  }
      
  agregar=(peli,horario)=>{

      const objeto={
        codigo:peli.codigo,
        nombre:peli.nombre, 
        idioma:peli.idioma, 
        clasificacion:peli.clasificacion,
        horario:horario,
        cantidad:1,
        duracion:peli.duracion,
        total:0
      }
       this.setState({
          ...this.state,
          compra:objeto
      })
         
  }

  cancelar=()=>{
    this.setState({
      ...this.state,
      compra:[]})
  }  
  
  comprar=(peli)=>{

    if(peli.cantidad>0){
      this.setState({
        ...this.state,
        compra:[]
      })
    }   
  }
   
  calcular=(e,peli)=>{

    var precio;
    if(peli.clasificacion==='A'){
      precio=50;
    }else if(peli.clasificacion==='B'){
      precio=80;
    }else if(peli.clasificacion==='C'){
      precio=95;
    }                
      
    const objeto={
      codigo:peli.codigo,
      nombre:peli.nombre, 
      idioma:peli.idioma, 
      clasificacion:peli.clasificacion,
      horario:peli.horario,
      cantidad:e,
      duracion:peli.duracion,
      total:e*precio
    }

    this.setState({
      ...this.state,
      compra:objeto,
    })

  }
  
  render() {    
    return (
      <div className="App">
        <Header/>
        <div className="Containers">
          
          <Peliculas
            cartelera={this.state.cartelera}
            agregar={this.agregar}
          />
          <Recibo
            compra={this.state.compra}
            calcular={this.calcular}
            cancelar={this.cancelar}
            comprar={this.comprar}
          />          
        </div>
      </div>
    )
  }
}

export default App;

