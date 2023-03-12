import express from 'express'
import { getAllResultados, getResultados, deleteResultados, updateResultado, createResult } from '../controllers/resultados.controller.js'


const routerResult = express.Router()

routerResult.get('/', getAllResultados)
routerResult.get('/:codigo_test', getResultados)
routerResult.delete('/:id', deleteResultados)
routerResult.put('/:id', updateResultado)
routerResult.post('/', createResult)

export default routerResult