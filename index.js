import { Api } from './Api.js'
import 'dotenv/config'
// console.log(process.env)

let servidor = new Api() //Creando un objeto de la clase Api

//Leventamos el servidor
servidor.iniciarServidor()