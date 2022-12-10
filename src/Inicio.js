import React, { useEffect, useState } from 'react';
import { listarRestaurantes } from './Service';
import Swal from 'sweetalert2';


export const Inicio = () => {
    const [Restaurante, setRestaurante] = useState([]);

    useEffect(() => {
        getRestaurante();
    }, []); 

    const getRestaurante = async () => {
        try {
            Swal.fire({ allowOutsideClick: false, text: 'Cargando...' });
            Swal.showLoading();
            const productosFirebase = await listarRestaurantes();
            setRestaurante(productosFirebase);
            Swal.close();
        } catch (error) {
            Swal.close();
            console.log(error);
        }
    }
    

    return (
        <div className="container container-fluid mt-3 mb-3 ">
            <div className="row row-cols-1 row-cols-md-4 g-4 cads">
                {
                    Restaurante.map(Restaurante => {
                        return (
                            <div className="col" key={Restaurante.id}>
                                <div className="card cads">
                                    <img src={Restaurante.imagen} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{Restaurante.nombre}</h5>
                                        <p className="card-text">{Restaurante.descripcion}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
