import express from 'express'

//Importo el controlador de Habitaciones
import {ControladorHabitacion} from '../Controllers/ControladorHabitacion.js'
//Creo un objeto de la clase ControladorHabitacion
let controladorHabitacion=new ControladorHabitacion()

//UTILIZO el metodo Router() de express
export let rutas=express.Router()

//LISTA DE SERVICIOS QUE OFRECE EL API
rutas.get('/api/v1/sabado', controladorHabitacion.buscarTodas)
rutas.get('/api/v1/sabado/:id', controladorHabitacion.buscarPorId)
rutas.post('/api/v1/sabado', controladorHabitacion.registrar)
rutas.put('/api/v1/sabado/:id', controladorHabitacion.editar)
rutas.delete('/api/v1/sabado/:id', controladorHabitacion.elimnar)

