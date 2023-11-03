import mongoose from "mongoose";


export async function establecerConexionBD(){
    try{

        await mongoose.connect(process.env.DATABASE)
        console.log("Exito en la conexion")

    }catch(error){
        console.log("Error", error)
    }
}