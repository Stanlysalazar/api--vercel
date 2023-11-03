//espacio para definir las rutas o enpoints especificos de su API
import express from 'express'

//Importo los controladores
import {ControladorHabitacion} from "../controllers/ControladorHabitacion.js"
import {ControladorReservas} from "../controllers/ControladorReservas.js"

let controladorHabitacion = new ControladorHabitacion()
let controladorReservas = new ControladorReservas()


export let rutasApi = express.Router()

//Aca van sus enpoints
    rutasApi.post('/api/habitaciones', controladorHabitacion.registrar)

    rutasApi.get('/api/habitaciones', controladorHabitacion.buscarTodas)
    
    rutasApi.get('/api/habitacion/:id', controladorHabitacion.buscarPorId)
    
    rutasApi.put('/api/habitaciones/:id', controladorHabitacion.modificar)
    
    rutasApi.delete('/api/habitaciones/:id', controladorHabitacion.eliminar)

    rutasApi.post('/api/reserva', controladorReservas.resgitrar)
    
    rutasApi.get('/api/reservas', controladorReservas.buscarTodas)
    
    rutasApi.get('/api/reserva/:id', controladorReservas.buscarPorId)
    
    rutasApi.put('/api/reserva/:id', controladorReservas.modificar)
    
    rutasApi.delete('/api/reserva/:id', controladorReservas.eliminar)
   
    
   