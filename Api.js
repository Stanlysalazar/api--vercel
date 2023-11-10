//Esta clase representa un servidor
import express from 'express'
import cors from 'cors'

import { rutasApi } from './routes/rutasHoteles.js'
import { establecerConexionBD } from './database/conexion.js'

export class Api{

    constructor(){
        this.app = express()
        this.procesarPeticiones()
        this.concectarBD()

    }
    //Funciones de un servidor
    //1. Iniciar el servidor
    iniciarServidor(){
        this.app.listen(process.env.PORT, function(){
            console.log("Servidor operando")
       })
       
    }

    //2. Procesar peteciones y responderlas
    procesarPeticiones(){
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use("/",rutasApi)
    
        
        }
        
    //3.Se conecta a la base de datos
    concectarBD(){
        establecerConexionBD()
    }
}