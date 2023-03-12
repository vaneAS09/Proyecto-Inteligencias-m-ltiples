import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import '../CSS/Formularios.css';
import '../CSS/Crear_objetos.css';
import '../CSS/style.css';

const URI = 'http://localhost:5000/colegios/'

const CompEditColegios = () => {
    const [nombre, setNombre] = useState('')
    const [ciudad, setCiudad] = useState('')
    const [nombre_repre, setNombre_repre] = useState('')
    const [clasificacion, setClasificacion] = useState('')
    const [c_dane, setC_dane] = useState('')
    const [telefono, setTelefono] = useState('')
    const [correo, setCorreo] = useState('')
    const navigate = useNavigate() 
    const {id} = useParams()

    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+id, {
            nombre: nombre, 
            ciudad:ciudad, 
            nombre_repre:nombre_repre, 
            clasificacion:clasificacion,
            c_dane:c_dane, 
            telefono:telefono, 
            correo:correo
        })
        navigate('/ShowColegios')
    }

    useEffect( ()=>{
        getColeById()
    },[])

    const getColeById = async () => {
        const res = await axios.get(URI+id)
        setNombre(res.data.nombre)
        setC_dane(res.data.c_dane)
        setCiudad(res.data.ciudad)
        setNombre_repre(res.data.nombre_repre)
        setClasificacion(res.data.clasificacion)
        setTelefono(res.data.telefono)
        setCorreo(res.data.correo)
    }

    return (
        <div class="register-form">
           <h1 class="Registrar_font">Editar un Colegio</h1>

           <form onSubmit={update} class="Registrar_font">
                <div className='mb-3'>

                <label className='form-label'>* Nombre del Colegio</label>
                <input id="rol" name="documentType" class="select-css" tabindex="1"
                    value={nombre}
                    onChange={ (e)=> setNombre(e.target.value)} 
                    type="text"
                    className='form-control'
                    required
                > 
                                 
                </input>

                    
                 </div>   
                 <div className='mb-3'>
                     <label className='form-label'>* Código Dane</label>
                    <input
                        value={c_dane}
                        onChange={ (e)=> setC_dane(e.target.value)} 
                        type="text"
                        className='form-control'
                        minlength="5" 
                        maxlength="14"
                        required 
                        tabindex="2" 
                        autofocus
                    />                 
                 </div>  

                 <div className='mb-3'>
                     <label className='form-label'>* Nombre del representante</label>
                    <input
                        value={nombre_repre}
                        onChange={ (e)=> setNombre_repre(e.target.value)} 
                        type="text"
                        className='form-control'
                        required 
                        tabindex="3" 
                        autofocus
                    />                 
                 </div>  

                 <div className='mb-3'>
                     <label className='form-label'>* Email</label>
                    <input
                        value={correo}
                        onChange={ (e)=> setCorreo(e.target.value)} 
                        type="email"
                        className='form-control'
                        required 
                        tabindex="4" 
                        autofocus
                    />                 
                 </div>  


                 <div className='mb-3'>
                     <label className='form-label'>* Ciudad</label>
                    <input
                        value={ciudad}
                        onChange={ (e)=> setCiudad(e.target.value)} 
                        type="text"
                        className='form-control'
                        minlength="3" maxlength="20" required tabindex="5"
                    />                 
                 </div> 

                 <div className='mb-3'>
                     <label className='form-label'>* Teléfono</label>
                    <input
                        value={telefono}
                        onChange={ (e)=> setTelefono(e.target.value)} 
                        type="text"
                        className='form-control'
                        minlength="3" maxlength="20" required tabindex="6"
                    />                 
                 </div> 

                 <div className='mb-3'>
                     <label className='form-label'>* Clasificación</label>
                    <input
                        value={clasificacion}
                        onChange={ (e)=> setClasificacion(e.target.value)} 
                        type="text"
                        className='form-control'
                        minlength="3" maxlength="20" required tabindex="7"
                    />                 
                 </div> 
                 <button type='submit' class="btn-save">Guardar</button>  
                   
                 <a href="/ShowColegios" class="cancelar">Cancelar</a> 
                              
           </form>
        </div>
    )

}

export default CompEditColegios