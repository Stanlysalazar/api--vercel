import { modeloReserva } from "../models/modeloReserva.js";
export class ServicioReservas{
    
    constructor(){}

    async buscarTodas(){
        let reservas = await modeloReserva.find()
        return reservas
    }

    async buscarPorId(id){
       let reserva = await modeloReserva.findById(id)
       return reserva
    }

    async modificar(id, datos){
        return await modeloReserva.findByIdAndUpdate(id, datos)
    }

    async resgitrar(datos){
        let reserevaNueva = new modeloReserva(datos)
        return reserevaNueva.save()
    }

    async eliminar(id){
        let reservaEliminada = await modeloReserva.findByIdAndDelete(id)
        return reservaEliminada
    }
}