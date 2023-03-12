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

const CompPreg16a20 = () => {
    const [pregunta16, setPregunta16] = useState('')
    const [pregunta17, setPregunta17] = useState('')
    const [pregunta18, setPregunta18] = useState('')
    const [pregunta19, setPregunta19] = useState('')
    const [pregunta20, setPregunta20] = useState('')
    
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
            pregunta16: pregunta16, 
            pregunta17: pregunta17, 
            pregunta18: pregunta18, 
            pregunta19: pregunta19, 
            pregunta20: pregunta20, 

        })
        navigate('/Pregunta21a25')
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
  <div className="fuente_init">PREGUNTAS DE LA 16 A LA 20</div>
  
  </Box>
  
  <Grid xs={12} md={12} lg={12} alignItems="center" 
      className="Inicio_Form" 
    >

    <div className="progreso1"></div>
    <div className="progreso5"></div>
    <div className="font_progresos"> 20 de 40</div>

        <p className="espacio"></p> 
        <p className="espacio"></p>
  
      <form className="Form_Preguntas" onSubmit={update}>
  
                  <p className="espacio"></p> 
                  <div className="img_pato2"></div> 

        <div className="fuente_preguntas" 
        value={pregunta16}
        onChange={ (e)=> setPregunta16(e.target.value)} >
        * Animo a otros a cuidar el planeta y voy adelante con el ejemplo.
        <p className="espacio"></p> 
        <input type="radio" value="1" name="pregunta16" required/> Si <p></p>
        <input type="radio" value="0" name="pregunta16" /> No
        </div>
    
           <p className="espacio"></p> 

        <div className="fuente_preguntas" 
        value={pregunta17}
       onChange={ (e)=> setPregunta17(e.target.value)} >
        * Disfruto rodeándome de animales y/o plantas.
        <p className="espacio"></p> 
        <input type="radio" value="1" name="pregunta17" required/> Si <p></p>
        <input type="radio" value="0" name="pregunta17" /> No
        </div>
            
            <p className="espacio"></p> 

        <div className="fuente_preguntas" 
        value={pregunta18}
        onChange={ (e)=> setPregunta18(e.target.value)} >
        * Me gusta participar en grupos o proyectos de protección al medio ambiente o a los animales.
        <p className="espacio"></p> 
        <input type="radio" value="1" name="pregunta18" required/> Si <p></p>
        <input type="radio" value="0" name="pregunta18" /> No
        </div>
  
            <p className="espacio"></p> 
  
        <div className="fuente_preguntas" 
        value={pregunta19}
       onChange={ (e)=> setPregunta19(e.target.value)} >
        * Me siento especialmente a gusto al aire libre y en contacto con la naturaleza.
        <p className="espacio"></p> 
        <input type="radio" value="1" name="pregunta19" required/> Si <p></p>
        <input type="radio" value="0" name="pregunta19" /> No
        </div>
  
            <p className="espacio"></p> 
        
        <div className="fuente_preguntas" 
        value={pregunta20}
        onChange={ (e)=> setPregunta20(e.target.value)} >
        * Me molesta cuando las personas no cuidan el medio ambiente.
        <p className="espacio"></p> 
        <input type="radio" value="1" name="pregunta20" required/> Si <p></p>
        <input type="radio" value="0" name="pregunta20" /> No
        </div>
        
  
            <button type="submit" class="boton_siguiente"> Siguiente </button>
            <form method="get" action="/Pregunta11a15">
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


export default CompPreg16a20