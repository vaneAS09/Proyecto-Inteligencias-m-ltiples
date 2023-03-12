import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import "../CSS/Login.css";
import "../CSS/style.css"
import { Grid, Box, Icon, Button} from "@material-ui/core";
import '../CSS/InicioPros.css'
import '../CSS/RutasInit.css'
import '../CSS/Preguntas.css'

const URI = 'http://localhost:5000/evaluaciones'
const URI2 = 'http://localhost:5000/resultados'

const FinTest = () => {
    const [estado] = useState('cerrado')
    const navigate = useNavigate()
    const [puntos_verbal, setPuntos_verbal] = useState('')

    useEffect( ()=>{
      getResById()
  },[])

  const getResById = async () => {
      const res = await axios.get(URI2+codigo_unico)
      setPuntos_verbal(res.puntos_verbal)
      puntos_verbal = res.puntos_verbal
  }

     //Información del inicio de sesión

     const documento = localStorage.getItem("num_documento");
     const codigo_unico = localStorage.getItem("codigo_unico");
 

    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI ,{
            documento: documento,
            codigo_unico: codigo_unico,
            estado: estado,

        })

        await axios.post(URI2, {
          codigo_test:codigo_unico,
          num_documento:documento,
      })
        navigate('/')
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
  <div className="fuente_init">TUS RESULTADOS</div>
  
  </Box>
  
  <Grid xs={12} md={12} lg={12} alignItems="center" 
      className="Inicio_Form" 
    >
  
         <form className="Form_Preguntas" onSubmit={update}>
  
         <p className="espacio"></p> 
         <p className="espacio"></p> 
         <p className="espacio"></p> 
         <p className="espacio"></p> 
        
        <div className="fuente_finalizar">!Felicidades finalizaste tu test con exito!</div>
        <div className="img_Mery_finalizarTest"></div>

        
            <button type="submit" class="boton_siguiente"> Finalizar </button>
            <form method="get" action="/Pregunta36a40">
            <button class="boton_anterior" type="submit"> Volver </button>
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

export default FinTest;