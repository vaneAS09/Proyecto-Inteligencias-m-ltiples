import './CSS/Home.css';
import React from "react";
import './CSS/InicioPros.css'
import { Grid, Box} from "@material-ui/core";

const Start = () => {

     

    return(
    <>    
       <div >

        <Grid  container spacing={0} >

        <Grid xs={12} md={12} lg={12} alignItems="center" className="Inicio_pros_contenedor">

        <Grid xs={12} md={12} lg={12} alignItems="center" container  >
        <Box
            bgcolor="primary.main"
            color="primary.contrastText"
            p={10}
            textAlign="center"
            className="Inicio_pros_barra"
          >
        
        <img className="Inicio_pros_logo"></img> 
        <div className="Inicio_pros_font"> Test Uao</div> 

        </Box>

        </Grid>

        <Grid xs={12} md={12} lg={12} alignItems="center"  Container>

        <div className="Inicio_pros_body"></div>

        <Grid xs={12} md={12} lg={12} alignItems="center"  >

        <Box
            bgcolor="primary.main"
            color="primary.contrastText"
            p={10}
          >
        <div className=" Inicio_pros_caja1" >
        <div  border="none" className="Inicio_pros_Registrarse"></div>
        <a href="/RutaProspect" className="Inicio_pros_fuente_registro">Registrarse</a>
        </div>
        <div></div>
        

        </Box>

        <Box
            bgcolor="primary.main"
            color="primary.contrastText"
            p={10}
            
          >
        
        <div  border="none" className="Inicio_pros_caja2">
        <div  border="none" className="Inicio_pros_initTest"></div>
        <a href="/RutaTest"className="Inicio_pros_fuente_initTest"> Comenzar un test</a>
        </div>
        <div></div>
        

        </Box>

        <a href="/RutaRecuperar"className="Inicio_pros_fuente_recuperar"> </a>
      
        </Grid>
        </Grid>

        </Grid>

        </Grid>

        </div>
    </> 

       
    )
}
export default Start