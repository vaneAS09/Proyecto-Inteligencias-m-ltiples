import colegiomodel from "../models/Colegios.model.js";


//** Métodos para el CRUD **/

//Validar un colegio


export const validarCole = async (req, res) => {


    try {
        const { c_dane  } = req.body;

        colegiomodel.findOne({ where: {c_dane:c_dane}}).then((colegio) => {
            console.log(colegio);
            if (!colegio) {
              return res.json({ mensaje: "No existe colegio" });
            }
            else {

                const {c_dane, nombre, ciudad} = colegio;
                const data = {c_dane, nombre, ciudad}


       res.json({
        mensaje: "Colegio encontrado",
        colegio: {
            c_dane,
            nombre,
            ciudad
          },

    });

    }});
            
    } catch (error) {
        res.json( {message: error.message} )
    } 
        
}

//Mostrar todos los Colegios

export const getAllColegios= async (req, res) => {
    try {
        const colegio = await colegiomodel.findAll()
        res.json(colegio)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Mostrar un registro
export const getCole = async (req, res) => {
    try {
        const colegio = await colegiomodel.findAll({
            where:{ id:req.params.id }
        })
        res.json(colegio[0])
    } catch (error) {
        res.json( {message: error.message} )
    }
}


//Crear un registro

export const crearColegio = async (req, res) => {

    try {

    const {c_dane, nombre, nombre_repre, clasificacion, telefono, correo, ciudad} = req.body;

    // Validar si el código unico de text existe y está abierto
  
    colegiomodel.findOne({ where: {c_dane:c_dane} }).then((codDane) => {
      console.log(codDane);
      if (codDane) {
        return res.json({ mensaje: "El colegio ya existe" });
      }
      else {
         
            colegiomodel.create({
            c_dane:c_dane, 
            nombre:nombre, 
            nombre_repre:nombre_repre, 
            clasificacion:clasificacion, 
            telefono:telefono, 
            correo:correo,
            ciudad:ciudad
          });
     
          res.json("Registro creado de manera exito");


        }
    });

    } catch (error) {
    res.json( {message: error.message} )
    }
};

//Actualizar un registro
export const actualizarColegio = async (req, res) => {
    try {
   
            await colegiomodel.update(req.body, {
            where: { id: req.params.id}
        })
        res.json({
            "message":"¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}


//Eliminar un registro
export const eliminarColegio = async (req, res) => {
    try {
        await colegiomodel.destroy({ 
            where: { id : req.params.id }
        })
        res.json({
            "message":"¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
