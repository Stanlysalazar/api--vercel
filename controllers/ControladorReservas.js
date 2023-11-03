import moment from "moment"

import { ServicioReservas } from "../services/ServiciosReservas.js";
export class ControladorReservas{
    constructor(){}
    
    async buscarTodas(request, response){
        try{
            //1. Hay que recibir datos
            //2. Intentare conectarme a BD
            //3. Envio la respuesta
            let servicioReservas = new ServicioReservas()
            response.status(200).json({
                "estado": true,
                "mensaje":"Exito buscando las habitaciones",
                "datos": await servicioReservas.buscarTodas()
            })
        }catch(error){
            response.status(500).json({
                "estado": false,
                "mensaje":"error , fallamos buscando la habitacion" +error,
                "datos": null
            })
        }
    }

    async buscarPorId(request, response){
        try{
            let servicioReservas = new ServicioReservas()
            let id= request.params.id
            console.log(id)
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito buscando las habitacion",
                "datos": await servicioReservas.buscarPorId(id)
            })
        }catch(error){
            response.status(500).json({
                "estado": false,
                "mensaje": "Error al registrar la habitación",
                "error": error
            });
        }
    }

    async modificar(request, response){
        try{
            let servicioReservas = new ServicioReservas()
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito al modificar la habitacion",
                "datos": await servicioReservas.modificar()
            })
        }catch(error){
            response.status(500).json({
                "estado": false,
                "mensaje": "Error al registrar la habitación",
                "error": error
            });
        }
    }

    async resgitrar(request, response){
        try{
            //const fechaInicio = moment(fechaInicioReserva)
            //const fechaFinal = moment(fechaFinalReserva)
            //const diferenciaDias = fechaFinal.diff(fechaInicio, 'days')
            let datos = request.body
            let servicioReservas = new ServicioReservas()
            await servicioReservas.resgitrar(datos)
            console.log(datos)
            response.status(200).json({
                "datos":datos
            })
        }catch(error){
            response.status(500).json({
                "estado": false,
                "mensaje": "Error al registrar la habitación"+error,
                "error": error
            });
        }
    }

    async eliminar(request, response){
        try{
            let servicioReservas = new ServicioReservas()
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito al eliminar reserva",
                "datos": await servicioReservas.eliminar()
            })
        }catch(error){
            response.status(500).json({
                "estado": false,
                "mensaje":"error , fallamos eliminando la habitacion" +error,
                "datos": null
            })    
        }
    }

}



