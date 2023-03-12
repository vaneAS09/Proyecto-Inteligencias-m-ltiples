import axios from "axios";
import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Login.css";
import "../CSS/style.css"
import { Grid, Box, Icon, Button} from "@material-ui/core";
import '../CSS/InicioPros.css'
import '../CSS/RutasInit.css'
import '../CSS/Preguntas.css'

const URI = 'http://localhost:5000/evaluaciones'

const CompPreg21a25 = () => {
    const [pregunta21, setPregunta21] = useState('')
    const [pregunta22, setPregunta22] = useState('')
    const [pregunta23, setPregunta23] = useState('')
    const [pregunta24, setPregunta24] = useState('')
    const [pregunta25, setPregunta25] = useState('')
    
    const navigate = useNavigate()
 

     //Información del inicio de sesión

     const documento = localStorage.getItem("num_documento");
     const codigo_unico = localStorage.getItem("codigo_unico");
 

    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI ,{
            documento: documento,
            codigo_unico: codigo_unico,
            pregunta21: pregunta21, 
            pregunta22: pregunta22, 
            pregunta23: pregunta23, 
            pregunta24: pregunta24, 
            pregunta25: pregunta25, 

        })
        navigate('/Pregunta26a30')
    }
  
    return (
      <>
        <div>
        <Grid  container spacing={0} >
  
  <Grid xs={12} md={12} lg={12} alignItems="center" className="Inicio_pros_contenedor2">
  
  <Grid xs={12} md={12} lg={12} alignItems="center" container  >
  <Box
      bgcolor="primary.main"
      color="primary.contrastText"
      p={10}
      textAlign="center"
      className="Inicio_pros_barra"
    >
  
  <div className="Inicio_pros_logo"></div> 
  <div className="Inicio_pros_font"></div> 
  
  </Box>
  
  </Grid>
  
  <Grid xs={12} md={12} lg={12} alignItems="center" className="Inicio_pros_body-Vistas" Container>
  
  <Grid xs={12} md={12} lg={12} alignItems="center"  >
  
  <Box
      bgcolor="primary.main"
      color="primary.contrastText"
      p={2}
      textAlign="center"
      className="Position_init" 
    >
  
  <div  border="none" className="punto"></div>
  <div  border="none" className="Linea"></div>
  <div className="fuente_init">PREGUNTAS DE LA 21 A LA 25</div>
  
  </Box>
  
  <Grid xs={12} md={12} lg={12} alignItems="center" 
      className="Inicio_Form" 
    >

    <div className="progreso1"></div>
    <div className="progreso6"></div>
    <div className="font_progresos"> 25 de 40</div>

        <p className="espacio"></p> 
        <p className="espacio"></p>
  
  <form className="Form_Preguntas" onSubmit={update}>
  
                  <p className="espacio"></p> 
                  <div className="img_pato"></div> 

        <div className="fuente_preguntas" 
        value={pregunta21}
        onChange={ (e)=> setPregunta21(e.target.value)} >
        * Me siento especialmente a gusto cuando estoy en movimiento y al aire libre.
        <p className="espacio"></p> 
        <input type="radio" value="1" name="pregunta21" required/> Si <p></p>
        <input type="radio" value="0" name="pregunta21" /> No
        </div>
    
           <p className="espacio"></p> 

        <div className="fuente_preguntas" 
        value={pregunta22}
       onChange={ (e)=> setPregunta22(e.target.value)} >
        * Soy ágil para el deporte, tengo buen equilibrio y sentido de coordinación
        <p className="espacio"></p> 
        <input type="radio" value="1" name="pregunta22" required/> Si <p></p>
        <input type="radio" value="0" name="pregunta22" /> No
        </div>
            
            <p className="espacio"></p> 

        <div className="fuente_preguntas" 
        value={pregunta23}
        onChange={ (e)=> setPregunta23(e.target.value)} >
        * Sigo con facilidad nuevos pasos de baile.
        <p className="espacio"></p> 
        <input type="radio" value="1" name="pregunta23" required/> Si <p></p>
        <input type="radio" value="0" name="pregunta23" /> No
        </div>
  
            <p className="espacio"></p> 
  
        <div className="fuente_preguntas" 
        value={pregunta24}
       onChange={ (e)=> setPregunta24(e.target.value)} >
        * Me encanta armar y desarmar cosas o hacer manualidades.
        <p className="espacio"></p> 
        <input type="radio" value="1" name="pregunta24" required/> Si <p></p>
        <input type="radio" value="0" name="pregunta24" /> No
        </div>
  
            <p className="espacio"></p> 
        
        <div className="fuente_preguntas" 
        value={pregunta25}
        onChange={ (e)=> setPregunta25(e.target.value)} >
        * Disfruto mucho el movimiento, la danza o la actividad física.
        <p className="espacio"></p> 
        <input type="radio" value="1" name="pregunta25" required/> Si <p></p>
        <input type="radio" value="0" name="pregunta25" /> No
        </div>
        
  
            <button type="submit" class="boton_siguiente"> Siguiente </button>
            <form method="get" action="/Pregunta16a20">
            <button class="boton_anterior" type="submit"> Anterior </button>
            </form>
     
          </form>
  
  </Grid>
  
  </Grid>
  </Grid>
  
  </Grid>
  
  </Grid>
  
        
        </div>
  
       
      </>
    );
  };


export default CompPreg21a25