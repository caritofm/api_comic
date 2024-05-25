const {request, response} = require("express");

const personajesComic = require("../personajesComic");

const getPersonajesComic = (req = request, res = response) => {

    return res.json ({
        status: true, 
        personajesComic,
        statusCode:200
    });
}

const getPersonajesComicById = ( req = request, res = response) => {

    let id = req.params.id;

    if(!req.params.id){
        return res.json({
            msg: " Debe agregar id para realizar la busquedad"
        });
    }

    let personajesComicBuscar = "";

    personajesComicBuscar = personajesComic.find((personajesComic)=>{
        return personajesComic.id ===id
    });

    if(personajesComicBuscar){
        return res.json({
            ok: true,
            personajesComicBuscar: personajesComicBuscar,
            statuscode: 200
        });
    }else{
        return res.json({
            ok: false ,
            msg:"No hay comic  con ese id",
            statuscode: 404
        })
    }
}

module.exports = {
    getPersonajesComic,
    getPersonajesComicById
}