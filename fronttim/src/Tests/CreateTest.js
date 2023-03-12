import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import { Button} from '@mui/material';
import '../CSS/Formularios.css';
import '../CSS/Crear_objetos.css';
import '../CSS/style.css';

const URI = 'http://localhost:5000/test/'
const URI2 = 'http://localhost:5000/colegios/validaCole'

const CompCreateTest = () => {
    //const [codigo_unico, setCodigo] = useState('')

    
    const [estado, setEstado] = useState('')
    const [c_dane, setDane] = useState('');
    const [loading, setLoading] = useState(false);
    const [mensaje, setMensaje] = useState();
    const [nombre, setNomColegio] = useState('')
    const navigate = useNavigate()  
    const MySwal = withReactContent(Swal)
    
    


  const HandleChange = (e) => {
    setDane({ ...c_dane, [e.target.c_dane]: e.target.value });
    setNomColegio({ ...nombre, [e.target.nombre]: e.target.value });
    }

    //procedimiento para consultar un colegio

    const getColegios = async (e) => {
        e.preventDefault();
        if (c_dane !== "") {
            const Colegio = {
              c_dane,
              nombre,
              ciudad
            };

      setLoading(true);
      await axios
        .post(URI2, Colegio)
        .then((res) => {
          const { data } = res;
          setMensaje(data.mensaje);

          if(data.colegio.c_dane !== "" && c_dane !== ""){

                       }

          setTimeout(() => {
            setMensaje("");
              localStorage.setItem("c_dane", Colegio.c_dane);
              localStorage.setItem("nombre", data.colegio.nombre );
              localStorage.setItem("ciudad", data.colegio.ciudad );
              console.log(Colegio.c_dane, "Ver cod Dane")
              console.log(nombre, "Ver nombre colegio")
        }, 1500);
      })
  
          .catch((error) => {
            console.error(error);
            MySwal.fire({
                title: <strong>Colegio no encontrado</strong>,
                html: <i>Colegio no existe, cree un colegio e intente nuevamente</i>,
                icon: 'error',
                showConfirmButton: true,
                });
            setTimeout(() => {
              setMensaje("");
            }, 1500);
          });
        setLoading(false);
      }
    };

    const colegio = localStorage.getItem("nombre");
    const ciudad = localStorage.getItem("ciudad");

    console.log(colegio, "Resultado colegio")
     

    // procedimiento para generar el código único

    var init = 1000
    var fin =  100000

    function random() {
        return Math.floor((Math.random() * (fin - init + 1)) + init);
    }

    const aleatorio = random();

    console.log(aleatorio, "ver num");
    console.log(String(aleatorio), "ver cadena");
    
    const codigo_unico = String(aleatorio);

    
       
    //procedimiento guardar
    const Guardar = async (e) => {
        e.preventDefault()
        await axios.post(URI, {
            codigo_unico:codigo_unico,
            colegio:colegio,
            ciudad:ciudad,
            estado:estado
        })
     navigate('/ShowTests')
     console.log(c_dane, "Ver dane")
    }   


    return (
        <div class="register-form">
           <h1 class="Registrar_font">Crear un Test</h1>

           <form onSubmit={Guardar} class="Registrar_font">
                <div className='mb-3'>
                    
                 </div>   
                 <div className='mb-3'>
                     <label className='form-label'>* Código único</label>
                    <input
                        value={codigo_unico}
                        type="text"
                        className='form-control'
                        minlength="5" 
                        maxlength="14"
                        required 
                        tabindex="1" 
                        autofocus
                    />                 
                 </div>  

                 <div className='mb-3'>
                     <label className='form-label'>* Código Dane</label>
                     <Button onClick={getColegios}>GO</Button> 
                    <input
                        value={c_dane}
                        onChange={ (e)=> setDane(e.target.value) } 
                        name="c_dane"
                        id="c_dane"
                        type="search"
                        className='form-control'
                        required 
                        tabindex="2" 
                        autofocus
                       
                       // onKeyPress={getColegios}
                    />      
                           
                 </div>  

                 <div className='mb-3'>
                     <label className='form-label'>Nombre del Colegio</label>
                    <input
                        value={colegio}
                        name="colegio"
                        id="colegio"
                        type="text"
                        readonly="readonly"
                        className='form-control'
                        required 
                        tabindex="3" 
                        autofocus
                    />              
                 </div>  

                 <div className='mb-3'>
                     <label className='form-label'>* Ciudad</label>
                    <input
                        value={ciudad}
                        name="ciudad"
                        id="ciudad"
                        type="text"
                        readonly="readonly"
                        className='form-control'
                        required 
                        tabindex="4" 
                        autofocus
                    />                 
                 </div>  

                 <label className='form-label'>* Estado</label>
                <select id="estado" name="estado" class="select-css" tabindex="5"
                                        value={estado}
                                        onChange={ (e)=> setEstado(e.target.value)} 
                                        type="text"
                                        className='form-control'
                                        required
                >   
                <option value="Ninguno" selected>Ninguno</option>                    
                <option value="Abierto">Abierto</option>
                <option value="Cerrado">Cerrado</option>    
                                 
                </select>

                 <button type='submit' class="btn-save">Guardar</button>  
                   
                 <a href="/ShowTests" class="cancelar">Cancelar</a> 
                              
           </form>
        </div>
    )
}

export default CompCreateTest