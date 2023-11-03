import {ServicioHabitacion} from '../services/ServicioHabitacion.js'
export class ControladorHabitacion{
    constructor(){}

    async buscarTodas(request, response){
        try{
            //1. Hay que recibir datos
            //2. Intentare conectarme a BD
            //3. Envio la respuesta
            let servicioHabitacion = new ServicioHabitacion()
            response.status(200).json({
                "estado": true,
                "mensaje":"Exito buscando las habitaciones",
                "datos": await servicioHabitacion.buscarTodas()
            })

        }catch(error){
            response.status(400).json({
                "estado": false,
                "mensaje":"error en la busqueda",
                "datos": null
            })
        }
    }

    async buscarPorId(request, response){
        try{
             //1. Hay que recibir datos (si)
            let servicioHabitacion = new ServicioHabitacion()
            let id = request.params.id
            //2. Usar id que envio el cliente para buscar la habitacion em la BD
            //3. Respondo al cliente
            response.status(200).json({
                "estado": true,
                "mensaje":"Exito buscando la habitacion",
                "datos": await servicioHabitacion.buscarPorId(id)
            })
            
        }catch(error){
            response.status(400).json({
                "estado": false,
                "mensaje":"error , habitacion no encontrada" +error,
                "datos": null
            })
        }
    }

    async modificar(request, response){
        try{
            //1. Hay que reciir datos(si)
            let servicioHabitacion = new ServicioHabitacion()
            let id= request
            let datos = request.body
            await servicioHabitacion.modificar(id, datos) //Mostrar datos de esto
            //2. Modificar en bd
            //3.Enviar respuestas 
            response.status(200).json({
                "estado": true,
                "mensaje":"Exito al modificar la habitacion",
                "datos": null
            })

        }catch(error){
            response.status(400).json({
                "estado": false,
                "mensaje":"error , fallamos modificando la habitacion" +error,
                "datos": null
            })
        }
    }

    async registrar(request, response){
        try{
            //1.Recibir datos
            let servicioHabitacion = new ServicioHabitacion()
            let datos = request.body
            //Tomar dos fechas del objeto de datos
            //La diferencia en dias de esas dos fechas
            await servicioHabitacion.registrar(datos)
            //2. Guardelos en bd
            //3. Responda 
            response.status(200).json({
                "estado": true,
                "mensaje":"Exito al registrar la habitacion",
                "datos":datos
                //"diferencia":"Diferencia dias"
            })

        }catch(error){
            response.status(400).json({
                "estado": false,
                "mensaje":"error , fallamos registrando la habitacion" +error,
                "datos": null
            })
        }
        }

        async eliminar(request, response){
            try{
                //1.Recibir datos
                let servicioHabitacion = new ServicioHabitacion()
                let id = request.params.id
                //2.Elimine el id
                const habitacionEliminada = await Habitacion.findByIdAmdRemove(id)
                //3. Responda
                response.status(200).json({
                    "estado": true,
                    "mensaje":"Exito borramos la habitacion",
                    "datos": habitacionEliminada
                })
            }catch(error){
                response.status(400).json({
                    "estado": false,
                    "mensaje":"error , fallamos eliminando la habitacion" +error,
                    "datos": null
                })
        
        }
    }
       
}

   
//En reservas Tomar 2 fecchas del objeto datos, la diferencia en dias de esa dos fechas
//Diferencia = Diferencia calculada en dia