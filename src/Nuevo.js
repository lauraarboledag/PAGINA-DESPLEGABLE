import React, { useState } from 'react'
import { crearRestaurante } from './Service';
import Swal from 'sweetalert2';

export const Nuevo = () => {

  const [ valoresFormulario, setValoresFormulario ] = useState({});
  const { nombre = '', descripcion = '', imagen = '' } = valoresFormulario;


  const handleOnChange = (e) => {
    setValoresFormulario({ ...valoresFormulario, [e.target.name]: e.target.value });
  }

  
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(valoresFormulario);
    try {
      Swal.fire({ allowOutsideClick: false, text: 'Cargando...' });
      Swal.showLoading();
      await crearRestaurante(valoresFormulario);
      Swal.close();
      console.log('Creado desde la pagina nuevo producto');
      setValoresFormulario({ nombre: '', descripcion: '', imagen: '' });
    } catch (error) {
      Swal.close();
      console.log(error);
    }
  }

  return (
    <div className="container-fluid mt-3">
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <div className="mb-3">
          <label className="form-label">Nombre Restaurante</label>
          <input required type="text" name="nombre" value={nombre} 
              className="form-control" onChange={ (e) => { handleOnChange(e) } } />
        </div>
        <div className="mb-3">
          <label className="form-label">Descripcion</label>
          <input required type="text" name="descripcion" value={descripcion} 
              className="form-control" onChange={ (e) => { handleOnChange(e) } } />
        </div>
        <div className="mb-3">
          <label className="form-label">Imagen URL</label>
          <input required type="URL" className="form-control" name='imagen' 
              value={ imagen } onChange={ (e) => { handleOnChange(e) } } />
        </div>
        <button type="submit" className="btn btn-primary">Guardar</button>
      </form>
    </div>
  )
}
