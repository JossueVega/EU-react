import '../App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Recibo = (props) => {
    return ( 
        <div className="List">
          {
            Object.keys(props.compra).length!==0?          
           
            <div>
                <h4>Boleto</h4>
                <div className="Ticket">
                  <p><strong>{props.compra.nombre}</strong> ({props.compra.idioma})</p>
                  <p><strong>Hora: </strong>{props.compra.horario}</p>
                  <p><strong>Cantidad: </strong><input type='number'  className="text-center" style={{width: '15vmin'}} value={props.compra.cantidad} min="1" max="10" onChange={e=>props.calcular(e.target.value,props.compra)}/></p>
                  <p><strong>Total: </strong>${(props.compra.total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
                  <div className="Botones">                     
                    <Button onClick={()=>props.comprar(props.compra)}variant="success">Comprar</Button> 
                  </div>
                  <div className="Botones">
                    <Button onClick={()=>props.cancelar()}variant="danger">Cancelar</Button> 
                  </div>
                </div> 
            </div> 
            
            :
              <div className="Ticket2">
                <p>Seleccione una película</p>
              </div>

            }
          </div>
     );
}
 
export default Recibo;