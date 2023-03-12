import express from 'express'
import { validarCole, getAllColegios, crearColegio, actualizarColegio,eliminarColegio, getCole} from '../controllers/colegios.controller.js'


const routerColegio = express.Router()

routerColegio.post('/validaCole', validarCole)
routerColegio.get('/', getAllColegios)
routerColegio.get('/:id', getCole)
routerColegio.post('/', crearColegio)
routerColegio.put('/:id', actualizarColegio)
routerColegio.delete('/:id', eliminarColegio)

export default routerColegio