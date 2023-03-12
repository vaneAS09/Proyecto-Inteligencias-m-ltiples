//importamos la conexión a la DB
import db from "../config/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";


 const colegiomodel = db.define('colegios', {
    nombre: { type: DataTypes.STRING, required: true, min: 2, max: 255 },
    ciudad: { type: DataTypes.STRING, required: true, min: 6, max: 255 },
    nombre_repre: { type: DataTypes.STRING, required: true, min: 6, max: 255 },
    clasificacion: { type: DataTypes.STRING, required: true, min: 6, max: 1024 },
    c_dane: { type: DataTypes.STRING, required: true, min: 6, max: 1024 },
    telefono: { type: DataTypes.STRING, required: true, min: 6, max: 1024 },
    correo: { type: DataTypes.STRING, required: true, min: 6, max: 1024 }
 })

 export default colegiomodel;